"use client"
import AdminFormFieldFile from "../../form-field/AdminFormFieldFile"
import QuestionFormField from "../QuestionFormField"

const DiagramFormField = () => {
  return (
    <div className="flex flex-wrap -mx-2">
      <div className="w-2/5 px-2 mb-4">
        <AdminFormFieldFile label="Ảnh" details={{tableName: 'quiz'}} />
      </div>
      <div className="w-3/5 px-2 mb-4">
        <QuestionFormField 
          label="Nhóm câu hỏi" 
          renderItem={(index) => 
            <>
              <div>
                <p className="text-xs font-semibold mb-1.5 capitalize">question name  <span className="text-red-600">*</span>
                </p>
                <div className="border rounded focus-within:ring-2 ring-blue-600 bg-white">
                  <input type="text" className="w-full px-4 py-2" placeholder="Water runs into a __ used by local people" required />
                </div>
                <p className="mt-2 text-xs s-9Y9hJpp9NSMc">Use the __ symbol for the answer position.</p>
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold mb-1.5 capitalize">
                  answer <span className="text-red-600">*</span>
                </p>
                <div className="border rounded focus-within:ring-2 ring-blue-600 bg-white">
                  <input type="text" className="w-full px-4 py-2" placeholder="canal" required />
                </div>
              </div>
            </>
          } 
        />
      </div>
    </div>
  )
}

export default DiagramFormField