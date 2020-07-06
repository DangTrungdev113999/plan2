# - The packages:

- @react-native-community/async-storage: 1.11.0,
- @react-native-community/masked-view: 0.1.10,
- @react-navigation/native: 5.5.1,
- @react-navigation/stack: 5.5.1,
- babel-plugin-module-resolver: 4.0.0,
- babel-plugin-root-import: 6.5.0,
- immer: 7.0.5,
- react: 16.11.0,
- react-native: 0.62.2,
- react-native-gesture-handler: 1.6.1,
- react-native-linear-gradient: 2.5.6,
- react-native-reanimated: 1.9.0,
- react-native-safe-area-context: 3.0.2,
- react-native-screens: 2.8.0,
- react-native-vector-icons: ^6.6.0,
- react-redux: 7.2.0,
- redux: 4.0.5,
- redux-devtools-extension: 2.13.8,
- redux-persist: 6.0.0,
- redux-saga: 1.1.3,
- reselect: 4.0.0,
- styled-components: 5.1.0

## - reselect

### Motivation for Memoized Selectors

- Ở ví dụ trên, mapStateToProps gọi getVisibleTodos để tính toán lại todos. Điều này hoạt động tuyệt vời, nhưng có một nhược điểm, todos bị tính toán lại mỗi khi cấy state được cập nhật. Nếu cây state lớn, hay việc tính toán trở lên phức tạp, việc lập lại sự tính toán trong mỗi lần cập nhật có thể là nguyên nhân cho các vấn đề hiệu năng. Reselect có thể giúp tránh những việc tính toán không cần thiết này.

### Creating a Memoized Selector

- Chúng tôi muốn thay thế getVisibleTodos với một bộ chọn được ghi nhớ (memoized selector) cái mà tính toán lại todos khi giái trị của state.todos hay state.visibilityFilter thay đổi, nhưng không thay đổi khi xẩy ra trong những chỗ không liên qua.

- Reselect cung cấp function createSelector cho việc tạo memoized selectors. createSelector nhận một mảng các input-selectors và một transform function với các đối số của nó. Nếu cấy Redux state bị sửa đổi theo cách gây ra nguyên nhân giá trị của một input-selector thay đổi, selector sẽ gọi transform function của nó với các giá trị trả về của input-selectors là đối số và trả về kết quả. Nếu các giá trị của input-selectors giống với lần gọi trước đó đến selector, nó sẽ trả về giá trị được tính toán trước đó thay vì gọi transform function.
