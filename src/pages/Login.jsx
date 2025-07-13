
import{useForm} from "react-hook-form"

const Login = () => {
  
  const{register,handleSubmit,reset}=useForm()

  const Loginsubmit=(data)=>{
      console.log(data)
      reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(Loginsubmit)} className="mx-auto w-70 md:w-90 mt-30">
        <div className="mb-5">
          <input type="email" {...register("email")} className="bg-gray-50 border border-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
          <input type="password" {...register("password")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 placeholder-gray-900 dark:text-black"  placeholder='********'required />
        </div>
        <button type="submit" className="text-white bg-blue-800  font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Submit</button>
      </form>

    </div>
  )
}

export default Login
