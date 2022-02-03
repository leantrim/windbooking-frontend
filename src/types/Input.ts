/* Is used in Input.tsx commponent which is used in Form.tsx */

export default interface Input {
  name: string;
  label: string;
  error: string;
  restProps?: any;
  type: any;
  value: any;
  onChange: any;
}
