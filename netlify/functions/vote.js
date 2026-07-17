exports.handler = async (event) => {

  const TOKEN = "ut_rDzrndUWkK2f3pQDO3BcbMbJ914NNfR73AXwUFfR";

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Function works!",
      tokenLoaded: TOKEN.length > 0
    })
  };

};