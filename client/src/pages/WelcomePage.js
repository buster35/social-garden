// Simple welcome page for users without accounts to be brought to before entering the full site.
// Will have redirects to login page.
// Mostly used for flair.
// Could either have a big picture on the left-side, with a button that links to log-in on the right.
// Or it could be a picture of the website proper on the left, instead of a big picture.
// Should include the navbar the same as all the other pages, so no worries there.
// Could add Amy's name logo in the front page as well!

const WelcomePage = () => {
  function LoginPage() {
    window.location.href = "/login"
  }
  return (
    <div>
      <h1>Welcome to The Social Garden!</h1>
      <button onClick={LoginPage}>Sign Up or Log In!</button>
    </div>
  )
}

export default WelcomePage;