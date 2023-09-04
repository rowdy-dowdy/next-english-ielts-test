"use client"

import { Accordion, AccordionDetails, AccordionSummary, Button } from "@mui/material"
import { MouseEvent, ReactNode, SyntheticEvent, useState } from "react"

type State = {
  label: string,
  name?: string,
  children: ReactNode,
  isAdd?: boolean
}

const QuestionFormField: React.FC<State> = ({
  label,
  name,
  children,
  isAdd = true
}) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  }

  const [data, setData] = useState<{
    title: string,
    // answer: {
    //   answerName: string | null
    // },
    // optionA: string,
    // optionB: string,
    // optionC: string,
    // optionD: string
  }[]>([])

  const addToData = (e: MouseEvent) => {
    e.preventDefault()

    setData(state => [...state, {
      title: 'Câu hỏi',
      // answer: {
      //   answer_name: null
      // },
      // option_a: '',
      // option_b: '',
      // option_c: '',
      // option_d: ''
    }])
    setExpanded(`panel-${data.length}`)
  }

  return (
    <div>
      <p className="text-sm font-medium mb-1 capitalize">{label} <span className="text-red-500">*</span></p>
      <div className="flex flex-col">
        { data.map((v,i) => 
          <Accordion key={i} expanded={expanded === `panel-${i}`} onChange={handleChange(`panel-${i}`)} >
          <AccordionSummary
            expandIcon={<span className='icon'>expand_more</span>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <input type="text" defaultValue={v.title} />
          </AccordionSummary>
          <AccordionDetails>
            { children }
          </AccordionDetails>
        </Accordion>
        )}

        { isAdd
          ? <Button variant="outlined" startIcon={<span className="icon">add</span>}
            onClick={(e) => addToData(e)} className="!mt-4"
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