export function generateTimeAgo(date) {
  const time = new Date(date).getTime()
  const now = new Date().getTime()
  const diff = now - time
  if ((diff / 1000 / 60 / 60 / 24 / 30 / 12) > 1) {
    return Math.floor(diff / 1000 / 60 / 60 / 24 / 30 / 12) + ' жилийн өмнө'
  } 
  else if ((diff / 1000 / 60 / 60 / 24 / 30) > 1) {
    return Math.floor(diff / 1000 / 60 / 60 / 24 / 30) + ' сарын өмнө'
  } 
  else if ((diff / 1000 / 60 / 60 / 24) > 1) {
    return Math.floor(diff / 1000 / 60 / 60 / 24) + ' хоногийн өмнө'
  } 
  else if ((diff / 1000 / 60 / 60) > 1) {
    return Math.floor(diff / 1000 / 60 / 60) + ' цагийн өмнө'
  } 
  else if ((diff / 1000 / 60) > 1) {
    return Math.floor(diff / 1000 / 60) + ' минутын өмнө'
  }  
  else if ((diff / 1000) > 1) {
    return Math.floor(diff / 1000) + ' секундын өмнө'
  } 
}