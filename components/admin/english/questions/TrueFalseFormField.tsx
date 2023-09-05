"use client"

import AdminFormFieldText from "../../form-field/AdminFormFieldText"
import QuestionFormField from "../QuestionFormField"

const TrueFalseFormField = () => {
  return (
    <QuestionFormField label="Nhóm câu hỏi" renderItem={(index) =>
      <>
        <AdminFormFieldText label="question name"/>

        <div className="mt-4">
          <p className="text-xs font-semibold mb-1.5 capitalize">
            answer <span className="text-red-600">*</span>
          </p>
          <div className="flex -mx-2 flex-wrap">
            <div className="w-1/3 px-2 mb-4">
              <div 
                className="w-full flex items-center space-x-2 rounded border bg-white py-1 px-2" 
              >
                <span className="grid w-7 h-7 place-items-center rounded-full bg-gray-200 font-semibold">A</span>
                <span>True</span>
              </div>
            </div>

            <div className="w-1/3 px-2 mb-4">
              <div 
                className="w-full flex items-center space-x-2 rounded border bg-white py-1 px-2" 
              >
                <span className="grid w-7 h-7 place-items-center rounded-full bg-gray-200 font-semibold">B</span>
                <span>False</span>
              </div>
            </div>

            <div className="w-1/3 px-2 mb-4">
              <div 
                className="w-full flex items-center space-x-2 rounded border bg-white py-1 px-2" 
              >
                <span className="grid w-7 h-7 place-items-center rounded-full bg-gray-200 font-semibold">C</span>
                <span>Not give</span>
              </div>
            </div>
          </div>
        </div>
      </>
    } />
  )
}

export default TrueFalseFormField