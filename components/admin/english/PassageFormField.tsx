"use client"
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { Accordion, Button } from '@mui/material'
import { FC, MouseEvent, SyntheticEvent, useState } from 'react'
import AdminFormFieldRichText from '../form-field/AdminFormFieldRichText'
import DiagramFormField from './questions/DiagramFormField'
import TrueFalseFormField from './questions/TrueFalseFormField'
import ShortFormField from './questions/ShortFormField'
import SingleFormField from './questions/SingleFormField'
import SummaryFormField from './questions/SummaryFormField'
import YesNoFormField from './questions/YesNoFormField'
import MatchingFormField from './questions/MatchingFormField'
import "./custom.css";

type State = {
  label?: string,
  name?: string
  required?: boolean,
  defaultValue?: string,
  value?: string,
  placeholder?: string,
  onChange?: (value: string) => void
  className?: string
}

const PassageFormField: FC<State> = ({
  label,
  name,
  required = false,
  defaultValue,
  value,
  onChange,
  className,
  placeholder
}) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  }

  const [data, setData] = useState<{content: string, title: string, groupQuestions: any[]}[]>([])

  const addToData = () => {
    setData(state => [...state, {
      title: 'Đoạn văn ' + (state.length + 1),
      content: '',
      groupQuestions: []
    }])
    setExpanded(`panel-${data.length}`)
  }

  return (
    <div className={className}>
      { label
        ? <p className="text-sm font-medium mb-1 capitalize">{label} { required && <span className="text-red-500">*</span> }</p>
        : null
      }
      <div className="border rounded flex flex-col">
        { data.map((v,i) =>
          <Accordion key={i} expanded={expanded === `panel-${i}`} onChange={handleChange(`panel-${i}`)} >
            <AccordionSummary
              expandIcon={<span className='icon'>expand_more</span>}
            >
              <input type="text" defaultValue={v.title} />
            </AccordionSummary>
            <AccordionDetails>
              <div className="mb-4">
                <AdminFormFieldRichText />
              </div>
              <GroupQuestion />
            </AccordionDetails>
          </Accordion>
        )}

        <Button 
          variant='outlined' startIcon={<span className='icon'>add</span>} 
          className='!m-4'
          onClick={() => addToData()}
        >
          <span className="font-semibold">Thêm đoạn văn mới</span>
        </Button>
      </div>
    </div>
  )
}

const GroupQuestion = () => {
  type OptionTypeState = 'diagram' | 'true-false' | 'short' | 'single' | 'summary' | 'yes-no' | 'matching'

  type QuestionTypeMap = {
    type: OptionTypeState;
    label: string;
    component: FC;
  };

  const groupQuestionsListAdd: QuestionTypeMap[] = [
    { type: 'diagram', label: 'Diagram Label Completion', component: DiagramFormField},
    { type: 'true-false', label: 'True / False / Not given', component: TrueFalseFormField},
    { type: 'short', label: 'Short Answer', component: ShortFormField},
    { type: 'single', label: 'Single Answer', component: SingleFormField},
    { type: 'summary', label: 'Summary, Note Completion With Hint', component: SummaryFormField},
    { type: 'yes-no', label: 'Yes / No / Not Given', component: YesNoFormField},
    { type: 'matching', label: 'Matching Heading', component: MatchingFormField}
  ]

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [showAdd, setShowAdd] = useState(false)

  const [data, setData] = useState<{
    type: OptionTypeState,
    title: string,
    image: string | null,
    questions: any[]
  }[]>([])

  const addToData = (e: MouseEvent, type: OptionTypeState) => {
    e.preventDefault()

    const titleGroupQuestion = groupQuestionsListAdd.find(v => v.type == type)?.label || 'Nhóm câu hỏi'

    setData(state => [...state, {
      title: titleGroupQuestion,
      type: type,
      image: null,
      questions: []
    }])
    setExpanded(`panel-${data.length}`)
    setShowAdd(false)
  }

  return (
    <div>
      <p className="text-sm font-medium mb-1 capitalize">Nhóm câu hỏi <span className="text-red-600">*</span></p>
      <div className="list-rounded-2 flex flex-col">
        { data.map((v,i) => {
          const Component = groupQuestionsListAdd.find(v2 => v2.type == v.type)?.component
          
          return <Accordion key={i} expanded={expanded === `panel-${i}`} onChange={handleChange(`panel-${i}`)} >
            <AccordionSummary
              expandIcon={<span className='icon'>expand_more</span>}
            >
              <input type="text" defaultValue={v.title} />
            </AccordionSummary>
            <AccordionDetails>
              { Component ? <Component /> : null}
            </AccordionDetails>
          </Accordion>
        })}

        { data.length == 0 
          ? <p className='text-sm text-center'>------------------ Chưa có câu hỏi nào ------------------</p>
          : null
        }

        <div className="flex flex-col justify-center items-center mt-4">
          <div className={`w-full grid gap-2 ${!showAdd ? '!hidden' : 'mb-4'}`} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))' }}>
            { groupQuestionsListAdd.map(v => 
              <button 
                key={v.type}
                className="flex flex-col items-center justify-center border p-2 rounded group cursor-pointer bg-gray-100 hover:bg-blue-100 hover:text-blue-600 hover:border-blue-600"
                onClick={(e) => addToData(e, v.type)}
              >
                <span className="icon w-10 h-10 p-1 rounded-full bg-gray-200 group-hover:bg-blue-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 10V7c0-1.103-.897-2-2-2h-3c0-1.654-1.346-3-3-3S8 3.346 8 5H5c-1.103 0-2 .897-2 2v4h1a2 2 0 0 1 0 4H3v4c0 1.103.897 2 2 2h4v-1a2 2 0 0 1 4 0v1h4c1.103 0 2-.897 2-2v-3c1.654 0 3-1.346 3-3s-1.346-3-3-3z"></path></svg>
                </span>
                <span className="mt-2 text-xs text-center">{v.label}</span>
              </button>
            )}
          </div>

          <Button 
            variant='contained' 
            startIcon={<span className='icon'>{showAdd ? 'close' : 'add'}</span>}
            onClick={() => setShowAdd(state => !state)}
          >{showAdd ? 'Hủy bỏ' : 'Thêm nhóm câu hỏi mới'}</Button>
        </div>
      </div>
    </div>
  )
}

export default PassageFormField