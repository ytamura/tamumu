export const statusMap = {
  'IN_WISHLIST': {'icon': 'gift', 'color': 'purple'},
  'BACKLOG': {'icon': 'hourglass start', 'color': 'violet'},
  'PAUSED': {'icon': 'pause circle', 'color': 'blue'},
  'IN_PROGRESS': {'icon': 'game', 'color': 'orange'},
  'COMPLETED': {'icon': 'check circle', 'color': 'green'},
  'WONT_FINISH': {'icon': 'stop circle', 'color': 'red'},
  'NEVERMIND' : {'icon': 'trash', 'color': 'grey'},
  'NEVER_ENDING': {'icon': 'sync alternate', 'color': 'olive'},
};

export const statusGroups = [
  {'heading': 'In Progress',
   'id': 'inprogress',
   'statuses': ['IN_PROGRESS']},
  {'heading': 'Always on Deck',
   'id': 'alwaysondeck',
   'statuses': ['NEVER_ENDING']},
  {'heading': 'Backlog',
   'id': 'backlog',
   'statuses': ['BACKLOG', 'PAUSED']},
  {'heading': 'Wishlist',
   'id': 'wishlist',
   'statuses': ['IN_WISHLIST']},
  {'heading': 'Done for Now',
   'id': 'done',
   'statuses': ['COMPLETED', 'WONT_FINISH', 'NEVERMIND']},
];

export const allPlayers = [ 'Fordon', 'Fumo' ];