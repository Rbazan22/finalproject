import { ref } from "vue";

const useChoice = () => {
  const choice = ref(null);
  const setChoice = (value) => {
    choice.value = value;
  };

  return {
    choice,
    setChoice,
  };
};

export default useChoice;
