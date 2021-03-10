export const statusMap = {
  'IN_WISHLIST': {'icon': 'gift', 'color': 'purple'},
  'BACKLOG': {'icon': 'hourglass start', 'color': 'blue'},
  'IN_PROGRESS': {'icon': 'game', 'color': 'orange'},
  'COMPLETED': {'icon': 'check circle', 'color': 'green'},
  'WONT_FINISH': {'icon': 'dont', 'color': 'red'},
};

export const statusGroups = [
  {'heading': 'In Progress', 'statuses': ['IN_PROGRESS']},
  {'heading': 'Backlog & Wishlist', 'statuses': ['BACKLOG', 'IN_WISHLIST']},
  {'heading': 'Done for Now', 'statuses': ['COMPLETED', 'WONT_FINISH']},
];

export const allPlayers = [ 'Fordon', 'Fumo' ];