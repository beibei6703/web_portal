const type = {
  changeFromDepartment: '原部门',
  changeToDepartment: '调入部门',
  changeFromPosition: '原岗位',
  changeToPosition: '调入岗位',
  changeFromPositionCategory: '原职类',
  changeToPostionCategory: '调入职类',
  changeFromEmployeeGrade: '原职级',
  changeToEmployeeGrade: '调入职类',
  changeFromSerial: '原序列',
  changeToSerial: '调入序列',
  changeFromPositionType: '原岗位类别',
  changeToPositionType: '调入岗位类别',
  changeFromLeader: '原上级',
  changeToLeader: '调入上级',
  changeFromSalary: '原薪资',
  changeToSalary: '调整后薪资',
  changeFromTeacher: '原导师',
  changeToTeacher: '新导师',
  changeFromCity: '原工作城市',
  changeToCity: '调入工作城市'
};
export default function fromData(data) {
  let newList = [];
  data.forEach(item => {
      const itemKeys = Object.keys(type);
      const newItem = {
          activeDate: item.activeDate,
          reason: item.personnelChangesTypeEname,
          data: []
      };
      itemKeys.forEach(_item => {
          let obj = {};
          obj.name = type[_item];
          obj.value = item[_item];
          newItem.data.push(obj);
      });
      newList.push(newItem);
  });
  console.log('newList', newList);
  return newList;
}
