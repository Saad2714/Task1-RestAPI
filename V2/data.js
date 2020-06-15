const ROLE = {
    BASIC: 'basic',
    ADMIN: 'admin'
  }
  
  module.exports = {
    ROLE: ROLE,
    users: [
      { id: 1, name: 'Saad', role: ROLE.ADMIN },
      { id: 2, name: 'Anchor', role: ROLE.BASIC },
      { id: 3, name: 'Patel', role: ROLE.BASIC }
    ],
    projects: [
      { id: 1, name: "Saad's Project", userId: 1 },
      { id: 2, name: "Anchor's Project", userId: 2 },
      { id: 3, name: "Patel's Project", userId: 3 }
    ]
  }