<template
  ><table id="category-table">
    <tr>
      <th>1차 카테고리</th>
      <th>2차 카테고리</th>
    </tr>
    <tr>
      <td>
        셀러를 먼저 선택해주세요.
        <select name="first-category">
          <option value="">1차 카테고리를 선택해주세요.</option>
          <option value="스킨케어">스킨케어</option>
          <option value="메이크업">메이크업</option>
          <option value="바디케어">바디케어</option>
          <option value="헤어케어">헤어케어</option>
          <option value="향수">향수</option>
          <option value="미용소품">미용소품</option>
        </select>
      </td>
      <td>
        셀러를 먼저 선택해주세요.
        <select name="second-category">
          <option value="">2차 카테고리를 선택해주세요.</option>
          <option value="학생">학생</option>
          <option value="회사원">회사원</option>
          <option value="기타">기타</option>
        </select>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'TableCategory'
};
</script>

<style lang="scss" scoped>
@import '../styles/commonD.scss';

#category-table {
  th {
    width: 50%;
    border: 1px solid $darkgrey;
    background-color: $coolgrey;
    text-align: center;
  }

  td {
    border: 1px solid $darkgrey;
    background-color: $softgrey;
  }
}
</style>
