import React from 'react'

const Loader = () => {
  return (
    //if drei isnt working to tunr the leader into a 3d object, then how can I do that
    <div className = "flex justify-center items-center w-full h-screen bg-arcane-violet">
        <div className = "w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>

    </div>
  )
}

export default Loader