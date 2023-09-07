import PageRegister from "@/components/web/content/PageRegister"
import db from "@/lib/admin/prismadb"
import { isName, isPassword, removeSpace } from "@/lib/utils/validator"
import bcrypt from 'bcrypt'
import isEmail from "validator/lib/isEmail"

const register = async (data: {
  name: string, email: string, password: string
}) => {
  "use server"
  try {
    if (!isEmail(data.email)) throw "Email không hợp lệ"
    if (!isPassword(data.password)) throw "Mật khẩu không hợp lệ"

    const name = removeSpace(data.name)
    if (!isName(name)) throw "Tên không hợp lệ"

    await db.user.create({
      data: {
        email: data.email,
        name: name,
        password: await bcrypt.hash(data.password, 10),
      }
    })
  } catch (error) {
    console.log({error})
    throw (typeof error === "string" && error != "") ? error : 'Có lỗi xảy ra vui lòng thử lại sau'
  }
}

const page = () => {
  return (
    <PageRegister register={register} />
  )
}

export default page