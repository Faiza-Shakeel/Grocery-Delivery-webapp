import React, { useState } from "react"
import { assets } from "../assets/assets"

// ✅ Capitalized component name + added return
const InputField = ({ type, handleChange, address, name, placeholder }) => {
  return (
    <input
      className="w-full px-2 py-2.5 border border-gray-500 rounded outline-none text-gray-500 transition"
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      name={name}
      value={address[name]}
      required
    />
  )
}

const AddAdress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  })

  // ✅ fixed state update
  const handleChange = (e) => {
    const { name, value } = e.target
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    console.log("Address Submitted:", address)
  }

  return (
    <div className="mt-16 pb-16">
      <p className="text-xl text-gray-500 md:text-3xl">
        Add Shipping <span className="font-semibold">Address</span>
      </p>
<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 mt-10">
  {/* FORM SECTION */}
  <div className="flex-1 w-full max-w-lg">
    <form onSubmit={onSubmitHandler}>
      <div className="space-y-4 mt-6 text-sm">
        {/* Name fields side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            handleChange={handleChange}
            address={address}
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <InputField
            handleChange={handleChange}
            address={address}
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>

        <InputField
          handleChange={handleChange}
          address={address}
          name="email"
          type="email"
          placeholder="Email"
        />
        <InputField
          handleChange={handleChange}
          address={address}
          name="street"
          type="text"
          placeholder="Street"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            handleChange={handleChange}
            address={address}
            name="city"
            type="text"
            placeholder="City"
          />
          <InputField
            handleChange={handleChange}
            address={address}
            name="state"
            type="text"
            placeholder="State"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            handleChange={handleChange}
            address={address}
            name="country"
            type="text"
            placeholder="Country"
          />
          <InputField
            handleChange={handleChange}
            address={address}
            name="zipcode"
            type="text"
            placeholder="Zip Code"
          />
        </div>

        <InputField
          handleChange={handleChange}
          address={address}
          name="phone"
          type="text"
          placeholder="Phone"
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full py-3 bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
      >
        Save Address
      </button>
    </form>
  </div>

  {/* IMAGE SECTION */}
  <div className="flex-1 w-full flex justify-center">
    <img
      className="w-full max-w-md h-auto object-contain"
      src={assets.add_address_iamge}
      alt="Add Address"
    />
  </div>
</div>

    
    </div>
  )
}

export default AddAdress
