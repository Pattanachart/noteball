import { watch } from "vue";

export function useWatchCharector(usetoCha, Maxchar = 100) {
  watch(usetoCha, (newValue) => {
    if (newValue.length === Maxchar) {
      alert(`max ${Maxchar} Characters!`);
      console.log(`newValue: ${newValue}`);
    }
  });
}
