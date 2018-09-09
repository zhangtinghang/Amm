const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  user: state => state.user.user,
  roles: state => state.user.roles,
  toggleBlog: state => state.comm.blogType,
  createTime: state => state.user.createTime,
  type: state => state.user.type,
  status: state => state.user.status
}
export default getters
