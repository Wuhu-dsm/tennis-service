//  统一封装返回结构

export const success = (data: any) => {
  return { code: 200, message: 'success', data }
}
