
export const load = async () => {
 const response = await fetch("https://api.recruitly.io/api/candidate/?apiKey=TEST1236C4CF23E6921C41429A6E1D546AC9535E");
const candidatedata= await response.json();
 
return {
  candidatedata
  };
};
