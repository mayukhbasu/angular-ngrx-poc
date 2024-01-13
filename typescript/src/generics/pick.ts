interface Employee {
  id: number;
  name: string;
  department: string;
  email: string;
}

type EmployeeInfo = Pick<Employee, 'name' | 'department'>

const info: EmployeeInfo = {
  name: "",
  department: ""
}