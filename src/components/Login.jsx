import React from 'react';
// import PropTypes from "prop-types";


class Login extends React.Component {
  // static propTypes = {
  //   error: PropTypes.object,
  //   isLoaded: PropTypes.bool,
  //   items: PropTypes.array,
  //   page: PropTypes.number,
  //   turnPage: PropTypes.func,
  // };

  // convertToLegible = (string) => { 
  //   const txt = document.createElement("textarea");
  //   txt.innerHTML = string;
  //   return txt.value;
  // }

  render() {
    // const { error, isLoaded, items, page } = this.props;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    return (
      <div className="mx-auto p-16 max-w-xl">
        <form className="bg-white shadow-md bg-orange-500 rounded p-16">
          <h1 className="text-center text-3xl pb-8">Login</h1>
          <div className="mb-4 mx-2">
            <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-yellow-200" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6 mx-2">
            <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="****" />
          </div>
          <div className="flex justify-end mb-4 mx-2">
            <button className="bg-black text-white font-bold py-2 px-4 b-8 rounded focus:outline-none focus:shadow-outline" type="button">
              Login
            </button>
          </div>
          <hr />
          {/* <p className="mt-4">
            Please Contact the System Administrator at Extension 1001 to create a new Login or reset your password.
          </p>   */}
        </form>
      </div>
      );
    }
  }
// }

export default Login