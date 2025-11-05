console.log('Toodledo Integration Plugin loaded');

// Show a notification
PluginAPI.showSnack({
  msg: 'Hello from my plugin!',
  type: 'SUCCESS',
});

// Register a header button
PluginAPI.registerHeaderButton({
  label: 'Hello',
  icon: 'waving_hand',
  onClick: () => {
    PluginAPI.showSnack({
      msg: 'Button clicked!',
      type: 'INFO',
    });
  },
});