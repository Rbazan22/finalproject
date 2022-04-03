import { ref } from "vue";

const utilizeError = () => {
  const error = ref(null);
  const setError = (value) => {
    error.value = value;
  };
  return { error, setError };
};

export default utilizeError;
