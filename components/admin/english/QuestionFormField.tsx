"use client"

import { Accordion, AccordionDetails, AccordionSummary, Button } from "@mui/material"
import { FC, MouseEvent, ReactNode, SyntheticEvent, useState } from "react"

type State = {
  label: string,
  name?: string,
  renderItem: (index: number) => ReactNode,
  isAdd?: boolean,
  className?: string
}

const QuestionFormField: React.FC<State> = ({
  label,
  name,
  renderItem,
  isAdd = true,
  className
}) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  }

  const [data, setData] = useState<{
    index: number,
    answer: {
      answerName: string | null
    },
    optionA: string,
    optionB: string,
    optionC: string,
    optionD: string
  }[]>([])

  const addToData = (e: MouseEvent) => {
    e.preventDefault()

    setData(state => [...state, {
      index: state.length + 1,
      answer: {
        answerName: null
      },
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: ''
    }])
    setExpanded(`panel-${data.length}`)
  }

  const deleteData = (e: MouseEvent, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    
    setData(state => state.filter((v,i) => i != index))
  }

  return (
    <div className={className}>
      <p className="text-sm font-medium mb-1 capitalize">{label} <span className="text-red-500">*</span></p>
      <div className="flex flex-col">
        { data.map((v,i) => 
          <Accordion key={i} expanded={expanded === `panel-${i}`} onChange={handleChange(`panel-${i}`)} >
          <AccordionSummary
            expandIcon={<span className='icon'>expand_more</span>}
          >
            <div className="w-full flex justify-between space-x-2 items-center">
              <span>Câu hỏi {v.index}</span>
              <span className="icon text-red-600 cursor-pointer"
                onClick={(e) => deleteData(e, i)}
              >delete</span>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            { renderItem(i) }
          </AccordionDetails>
        </Accordion>
        )}

        { isAdd
          ? <Button variant="outlined" startIcon={<span className="icon">add</span>}
            onClick={(e) => addToData(e)} className={ data.length > 0 ? '!mt-4' : ''}
          >
            <span className="font-semibold">Add new question</span>
          </Button>
          : null
        }
      </div>
    </div>
  )
}

export default QuestionFormField