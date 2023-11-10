import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { House } from "../types"

export default function Property({ home }: { home: House }) {
  return (
    <div className="card w-64 h-96 bg-white shadow-xl mx-auto mb-3">
      <figure>
        <img
          src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg"
          alt="House"
        />
      </figure>
      <div className="card-body">
        <div className=" flex">
          <div className="w-3/4">
            <h2 className="card-title">{home.address}</h2>
            <p>
              {home.city} {home.state} {home.zipCode}
            </p>
          </div>
          <div className="w-1/4">
            <button className="btn btn-primary">
              <ChevronRightIcon className="chevron" />
            </button>
          </div>
        </div>

        <div className="card-actions justify-end"></div>
      </div>
    </div>
  )
}
