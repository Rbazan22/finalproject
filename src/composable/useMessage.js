import { ref } from "vue";

const useMessage = () => {
  const message = ref(null);
  const setMessage = (value) => {
    message.value = value;
  };

  return {
    message,
    setMessage,
  };
};

export default useMessage;
