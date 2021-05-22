const Password = () => {
  return <div>Password</div>
}

const Passwords = () => {
  return (
      <>
        <div>Passwords</div>
        {[1, 2, 3, 4, 5, 6].map(ele => Password)}
      </>
  )
}

export default Passwords
