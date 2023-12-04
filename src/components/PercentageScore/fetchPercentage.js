export const fetchPercentage = (cardName, setValue) => {
  const task =
    cardName === "Interview Prep" ? "interview-prep" : cardName.toLowerCase();
  let res = JSON.parse(localStorage.getItem(task));
  if (res) {
    let i = 0;
    for (const key in res) {
      if (res[key]) {
        i += 1;
      }
      const denominator = task === "interview-prep" ? 15 : 10;
      const percent = (i / denominator) * 100;
      setValue(percent);
    }
  }
};
