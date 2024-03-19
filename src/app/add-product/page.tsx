import Link from "next/link";

export default function AddProductPage(){
    return (
        <div className="flex flex-col gap-8 align-middle p-6">
            <h1 className="m-auto text-2xl font-bold">Add Product</h1>

            <Link href="/" className="w-full max-w-64 mx-auto p-4 py-2 border-b-2 border-b-teal-300 text-slate-700 text-center">Home</Link>    

            <form className="w-full min-w-[600px] h-fit p-6 flex flex-col items-center gap-6 border border-slate-200 rounded bg-neutral-100">
                <input required
                  name="name"
                  placeholder="Name"
                  type="text" className="w-full input input-bordered mx-auto border border-slate-300 bg-transparent focus:border-teal-400" 
                />

                <textarea
                  required
                  name="description"
                  placeholder="Description"
                  className="w-full textarea-bordered textarea mx-auto border-slate-300 bg-transparent focus:border-teal-400"
                />

                <input 
                  required
                  name="imageUrl"
                  placeholder="Image URL"
                  type="url"
                  className="w-full input input-bordered mx-auto border-slate-300 bg-transparent focus:border-teal-400"
                />

                <input 
                  required
                  name="price"
                  placeholder="Price"
                  type="number"
                  className="w-full input input-bordered mx-auto border-slate-300 bg-transparent focus:border-teal-400"
                />

                <button className="btn btn-primary btn-block" type="submit">Add Product</button>
            </form>
        </div>
    )
}