import { ref } from "vue";

const membershipClick = async () => {
  const setMember = async () => {
    const choice = ref(null);
    const setMember = (value) => {
      choice.value = value;
    };

    return {
      choice,
      setMember,
    };
  };
};

export default membershipClick;
