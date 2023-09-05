"use client"

import AdminFormFieldText from "../../form-field/AdminFormFieldText"
import QuestionFormField from "../QuestionFormField"

const SingleFormField = () => {
  return (
    <QuestionFormField 
      label="Nhóm câu hỏi" 
      renderItem={(index) => 
        <>
          <AdminFormFieldText label="question name" placeholder="What is the writer's main point in the first paragraph?"/>

          <div className="mt-4">
            <p className="text-xs font-semibold mb-1.5 capitalize">
              answer <span className="text-red-600">*</span>
            </p>
            <div className="flex -mx-2 flex-wrap">
              <div className="w-1/2 px-2 mb-4">
                <div 
                  className="w-full flex items-center space-x-2 rounded border bg-white py-1 px-2"
                >
                  <span className="grid w-7 h-7 place-items-center rounded-full bg-gray-200 font-semibold">A</span>
                  <input type="text" className="w-full py-1" placeholder="Our use of technology is having a hidden effect on us." />
                </div>
              </div>

              <div className="w-1/2 px-2 mb-4">
                <div 
                  className="w-full flex items-center space-x-2 rounded border bg-white py-1 px-2"
                >
                  <span className="grid w-7 h-7 place-items-center rounded-full bg-gray-200 font-semibold">B</span>
                  <input type="text" className="w-full py-1" placeholder="Technology can be used to help youngsters to read." />
                </div>
              </div>

              <div className="w-1/2 px-2 mb-4">
                <div 
                  className="w-full flex items-center space-x-2 rounded border bg-white py-1 px-2"
                >
                  <span className="grid w-7 h-7 place-items-center rounded-full bg-gray-200 font-semibold">C</span>
                  <input type="text" className="w-full py-1" placeholder="Travellers should be encouraged to use technology on planes." />
                </div>
              </div>

              <div className="w-1/2 px-2 mb-4">
                <div 
                  className="w-full flex items-center space-x-2 rounded border bg-white py-1 px-2"
                >
                  <span className="grid w-7 h-7 place-items-center rounded-full bg-gray-200 font-semibold">D</span>
                  <input type="text" className="w-full py-1" placeholder="Playing games is a more popular use of technology than reading." />
                </div>
              </div>
            </div>
          </div>
        </>
      } 
    />
  )
}

export default SingleFormField