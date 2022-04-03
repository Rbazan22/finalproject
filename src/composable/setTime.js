import { ref } from "vue";

const useTime = () => {
  const time = ref(null);
  const setTime = (value) => {
    time.value = value;
  };

  return {
    time,
    setTime,
  };
};

export default useTime;
