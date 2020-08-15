async function manifestJsonBuilder(data) {
  console.log(`Handler called with object ${JSON.stringify(data)}`);
  return {
    output: data
  };
}

export default manifestJsonBuilder;
