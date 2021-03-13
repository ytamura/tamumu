export const statusMap = {
  'IN_WISHLIST': {'icon': 'gift', 'color': 'purple'},
  'BACKLOG': {'icon': 'hourglass start', 'color': 'violet'},
  'PAUSED': {'icon': 'pause circle', 'color': 'blue'},
  'IN_PROGRESS': {'icon': 'game', 'color': 'orange'},
  'COMPLETED': {'icon': 'check circle', 'color': 'green'},
  'WONT_FINISH': {'icon': 'stop circle', 'color': 'red'},
};

export const statusGroups = [
  {'heading': 'In Progress',
   'statuses': ['IN_PROGRESS']},
  {'heading': 'Backlog & Wishlist',
   'statuses': ['BACKLOG', 'IN_WISHLIST', 'PAUSED']},
  {'heading': 'Done for Now',
   'statuses': ['COMPLETED', 'WONT_FINISH']},
];

export const allPlayers = [ 'Fordon', 'Fumo' ];