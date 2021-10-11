const MAIN_QUEST_URL = "https://twilio.com/quest";
const QUEST_API = `${MAIN_QUEST_URL}/api/v1`;

const AVATAR_DEFAULTS = [
  {
    ec: 0,
    hc: 0,
    sc: 0,
    hs: 6,
  },
  {
    ec: 1,
    hc: 1,
    sc: 4,
    hs: 1,
  },
  {
    ec: 1,
    hc: 4,
    sc: 4,
    hs: 2,
  },
  {
    ec: 3,
    hc: 0,
    sc: 3,
    hs: 3,
  },
  {
    ec: 6,
    hc: 0,
    sc: 1,
    hs: 0,
  },
  {
    ec: 0,
    hc: 0,
    sc: 0,
    hs: 4,
  },
];

function constructAvatarUrl(player) {
  const avatarBaseUrl = `${QUEST_API}/avatar-render?`;
  const query = {};

  if (player.avatar === 0) {
    // Custom avatar, use values for that
    query.ec = player.customAvatar.ec;
    query.hc = player.customAvatar.hc;
    query.sc = player.customAvatar.sc;
    query.hs = player.customAvatar.hs;
  } else {
    // For any of the other avatars, use default values
    Object.assign(query, AVATAR_DEFAULTS[player.avatar - 1]);
  }

  // Configure in-game item loadout
  Object.entries(player.loadout).forEach(([slot, item]) => {
    query[slot] = item;
  });

  const searchParams = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => searchParams.set(key, value));

  return avatarBaseUrl + searchParams.toString();
}

export default constructAvatarUrl;
