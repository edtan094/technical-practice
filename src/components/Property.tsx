import { ChevronRightIcon } from "@heroicons/react/24/solid"

export default function Property() {
  return (
    <div className="card w-52 h-96 bg-white shadow-xl">
      <figure className="house-image">
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Primary Address</h2>
        <p>Rest of Address</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <ChevronRightIcon className="chevron" />
          </button>
        </div>
      </div>
    </div>
  )
}
