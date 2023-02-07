export default interface Register {
  _id: string
  title: string
  timestamp: number
  pCut_Motor_Torque: number
  pCut_CTRL_Position_controller_Lag_error: number
  pCut_CTRL_Position_controller_Actual_position: number
  pCut_CTRL_Position_controller_Actual_speed: number
  pSvolFilm_CTRL_Position_controller_Actual_position: number
  pSvolFilm_CTRL_Position_controller_Actual_speed: number
  pSvolFilm_CTRL_Position_controller_Lag_error: number
  pSpintor_VAX_speed: number
}
