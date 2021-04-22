export const getUsersData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      return res.json()
}