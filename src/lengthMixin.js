export const lengthMixin = {
  computed: {
        calc_length(){
          return this.text2 + ' (' + this.text2.length + ')';
        }
      }
}