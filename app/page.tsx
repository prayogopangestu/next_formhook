// import Image from 'next/image'
"use client"
import { ErrorMessage } from "@hookform/error-message";
import { type } from "os";
import { useForm } from "react-hook-form";



type FormInputs ={
  fullname: string;
  alamat: string;
  jeniskelamin:string;
  agree:boolean;
  subcribe:boolean;
}

export default function Home() {

  const {register, handleSubmit, formState: {errors}} = useForm<FormInputs>();
  const onSubmit = (data:FormInputs)=> console.log(data);
  return (
    <div>
      <div className="bg-teal-800 py-5 ">
          <div className=" flex flex-row-reverse space-x-10 space-x-reverse mr-20 text-white">
            <div>Menu</div>
            <div>Contact</div>
            <div>About</div>
          </div>

      </div>
          <div className="py-10 px-20 ">
            <h1 className="text-3xl font-bold ">Apple Iphone 12 - White, 128 GB</h1>
          </div>
          <form>
          <div className="grid grid-cols-3 gap-4 ">
            <div className="ml-10 col-span-2 ">
              <div className="py-5  ">
                  <h1 className="text-sxl font-bold ">Product Details</h1>
              </div>

              <div className=" bg-green-300 py-10 rounded-lg grid grid-flow-row auto-rows-max p-5 ">

                      

                    

                    <label className="p-5">Nama  :
                    <input className="ml-5"
                    type="text"
                    
                    {...register("fullname",{required:"masukan nama anda"})}
                    />
                    {errors.fullname&&<p>{errors.fullname.message}</p>}
                    </label>

                    <label className="p-5">Alamat :
                    <input className="ml-4"
                    type="text"
                    
                    {...register("alamat",{required:true})}
                    />
                    </label>

                    <label className="p-5">jenis kelamin :
                    <input className="ml-4"
                    type="text"
                    
                    {...register("jeniskelamin",{required:true})}
                    />
                    </label>

                  

                    

                    <div className="py-12">

                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full mx-20" type="button" onClick={handleSubmit(onSubmit)}> Pilih</button>
              </div>
            
              <div className="py-5  ">
                  <h1 className="text-sxl font-bold ">Payments</h1>
              </div>
              <div className=" bg-green-300 py-10 rounded-lg">
                <div className="h-40"> 

                </div>
              </div>

              <div className="py-5  ">
                  <h1 className="text-sxl font-bold ">Shipping</h1>
              </div>
              <div className=" bg-green-300 py-10 rounded-lg">
                <div className="h-20"> 

                </div>
              </div>

            </div>
            <div> 
              <div className="py-5  ">
                  <h1 className="text-sxl font-bold ">Sale Sumaary</h1>
              </div>
              <div className="bg-green-300 py-20 rounded-lg mr-10">
                <div className="h-80"> 

                </div>
              </div>

              <div className="py-5  ">
                  <h1 className="text-sxl font-bold ">Buyer</h1>
              </div>
              <div className="bg-green-300 py-20 rounded-lg mr-10">
                <div className="h-19"> 

                </div>
              </div>
              </div>

              <div className="py-5">

              </div>
          </div>

          </form>




              <div className="bg-teal-800 py-5 "> 
              <div className="h-15">

              </div>
                <h1>FOOTER</h1>
              </div>
    </div>
  );
}
