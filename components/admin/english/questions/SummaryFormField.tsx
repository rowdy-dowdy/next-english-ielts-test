"use client"

import AdminFormFieldLongText from "../../form-field/AdminFormFieldLongText"
import AdminFormFieldText from "../../form-field/AdminFormFieldText"
import QuestionFormField from "../QuestionFormField"

const SummaryFormField = () => {
  return (
    <div className="flex flex-wrap -mx-2">
      <div className="w-full lg:w-1/2 px-2 mb-4">
        <AdminFormFieldText label="Summary title" placeholder="Studies on digital screen use" />
        <div className="mt-4">
          <AdminFormFieldLongText label="content"/>
        </div>
        <p className="mt-2 text-xs">Use the __ symbol for the answer position.</p>
      </div>

      <QuestionFormField className="w-full lg:w-1/2 px-2 mb-4" label="Nhóm câu hỏi" renderItem={(index) =>
        <div className="flex flex-wrap -mx-2">
          <div className="w-1/2 px-2 mb-4">
            <p className="text-xs font-semibold mb-1.5 capitalize">
              suggestion <span className="text-red-600">*</span>
            </p>
            <div className="border rounded focus-within:ring-2 ring-blue-600 bg-white">
              <input type="text" className="w-full px-4 py-2" placeholder="suggestion" />
            </div>
          </div>

          <div className="w-1/2 px-2 mb-4">
            <p className="text-xs font-semibold mb-1.5 capitalize">
              answer <span className="text-red-600">*</span>
            </p>
            <div className="border rounded focus-within:ring-2 ring-blue-600 bg-white">
              <input type="text" className="w-full px-4 py-2" placeholder="canal" />
            </div>
          </div>
        </div>
      } />
    </div>
  )
}

export default SummaryFormField