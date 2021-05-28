Kommunicate = typeof Kommunicate == 'undefined' ? {} : Kommunicate;

Kommunicate.defaultLabels = {
    'input.message': 'Type your message...',
    'conversations.title': 'Conversations',
    'start.new': 'Start New Conversation',
    'search.contacts': 'Contacts',
    'search.groups': 'Groups',
    'char.limit.warn':
        'Keep your message within 256 characters to help the bot understand easily',
    'limit.remove': 'Remove',
    'limit.characters': 'characters',
    'limit.remaining': 'remaining',
    'file.uploading.wait': 'Please wait file is uploading.',
    'empty.groups': 'No groups yet!',
    'empty.contacts': 'No contacts yet!',
    'empty.messages': 'No messages yet!',
    'no.more.messages': 'No more messages!',
    'empty.conversations': 'No conversations yet!',
    'no.more.conversations': 'No more conversations!',
    'search.placeholder': 'Search...',
    'location.placeholder': 'Enter a location',
    'create.group.title': 'Create Group',
    'members.title': 'Members',
    'add.members.title': 'Add Member',
    'remove.member': 'Remove Member',
    'change.role': 'Change Role',
    'group.info.update': 'Update',
    'group.info.updating': 'Updating...',
    'add.group.icon': 'Add Group Icon',
    'group.deleted': 'Group has been deleted',
    'change.group.icon': 'Change Group Icon',
    'group.title': 'Group Title',
    'group.type': 'Group Type',
    'group.create.submit': 'Creating Group...',
    'blocked': 'You have blocked this user',
    'group.chat.disabled': 'You are no longer part of this group!',
    'block.user.alert': 'Are you sure you want to block this user?',
    'unblock.user.alert': 'Are you sure you want to unblock this user?',
    'exit.group.alert': 'Are you sure you want to exit this group?',
    'remove.member.alert': 'Are you sure you want to remove this member?',
    'clear.messages.alert':
        'Are you sure you want to delete all the conversation?',
    'typing': 'typing...',
    'is.typing': 'is typing...',
    'online': 'Online',
    'offline': 'Offline',
    'clear.messages': 'Clear Messages',
    'delete': 'Delete',
    'reply': 'Reply',
    'forward': 'Forward',
    'copy': 'Copy',
    'block.user': 'Block User',
    'unblock.user': 'Unblock User',
    'group.info.title': 'Group Info',
    'exit.group': 'Exit Group',
    'location.share.title': 'Location Sharing',
    'my.location': 'My Location',
    'send': 'Send',
    'send.message': 'Send Message',
    'smiley': 'Emoji Picker',
    'close': 'Close',
    'edit': 'Edit',
    'save': 'Save',
    'file.attachment': 'Upload Attachment',
    'file.attach.title': 'Attach File',
    'last.seen': 'Last seen',
    'last.seen.on': 'Last seen on',
    'hour': ' hour',
    'min': ' min',
    'yesterday': 'yesterday',
    'hours': ' hours',
    'mins': ' mins',
    'time.format.AM': 'AM',
    'time.format.PM': 'PM',
    'time.format.am': 'am',
    'time.format.pm': 'pm',
    'user.delete': 'This user has been deleted',
    'ago': 'ago',
    'admin': 'Admin',
    'user': 'User',
    'moderator': 'Moderator',
    'member': 'Member',
    'public': 'Public',
    'private': 'Private',
    'open': 'Open',
    'you': 'You',
    'away': 'Away',
    'closed.conversation.message':
        'This conversation has been marked as resolved. If you have other queries, just send a message here or start a new conversation.',
    'search.faq': 'Search in FAQs...',
    'looking.for.something.else': 'Looking for something else?',
    'no-faq-found': 'We are here to help.',
    'talk.to.agent': 'Talk to an agent',
    'how.to.reachout': 'How may we reach you?',
    'email.error.alert': 'It seems you have entered an invalid email',
    'conversation.rated': 'rated the conversation',
    'offline.msg':
        'Uh oh! No internet connection. Please check your network settings and try again.',
    'group.metadata': {
        CREATE_GROUP_MESSAGE: ':adminName created group :groupName',
        REMOVE_MEMBER_MESSAGE: ':adminName removed :userName',
        ADD_MEMBER_MESSAGE: ':adminName added :userName',
        JOIN_MEMBER_MESSAGE: ':userName joined',
        GROUP_NAME_CHANGE_MESSAGE: 'Group name changed to :groupName',
        GROUP_ICON_CHANGE_MESSAGE: 'Group icon changed',
        GROUP_LEFT_MESSAGE: ':userName left',
        DELETED_GROUP_MESSAGE: ':adminName deleted group',
        GROUP_USER_ROLE_UPDATED_MESSAGE: ':userName is :role now',
        GROUP_META_DATA_UPDATED_MESSAGE: '',
        ALERT: '',
        HIDE: '',
    },
    'lead.collection': {
        email: 'Email',
        name: 'Name',
        phone: 'Contact Number',
        title: 'Conversations',
        heading:
            'Before starting, we just need a few details so that we may serve you better',
        submit: 'Start Conversation',
        option: 'Please select',
    },
    'csat.rating': {
        CONVERSATION_RATED: 'You rated the conversation',
        RATE_CONVERSATION: 'Rate your conversation',
        CONVERSATION_REVIEW_PLACEHOLDER: 'Add a feedback (optional)',
        OTHER_QUERIES: 'Have other queries? ',
        RESTART_CONVERSATION: 'Restart this conversation',
        SUBMIT_RATING: 'Submit your rating',
    },
    'page.title.on.new.message': 'New message from ',
    'emoji.hover.text': {
        poor: 'Poor',
        great: 'Great',
        average: 'Average',
    },
    'rich.message': {
        'notification.preview': 'Message',
    },
    'filter.conversation.list': {
        ALL_CONVERSATIONS: 'All conversations',
        ACTIVE_CONVERSATIONS: 'Active conversations',
        HIDE_RESOLVED: 'Hide resolved',
        SHOW_RESOLVED: 'Show resolved',
    },
    'rich.form': {
        errorText: 'Please enter valid data',
    },
    'faq.query.message': {
        QUERY_REGARDING: 'Hi, I have a query regarding',
        HELP_YOU: 'Can you help me out?',
    },
    'time.stamp': {
        'sec.ago': 'sec ago',
        'secs.ago': 'secs ago',
        'min.ago': 'min ago',
        'mins.ago': 'mins ago',
        'hr.ago': 'hr ago',
        'hrs.ago': 'hrs ago',
    },
    'voice.output': {
        location: {
            init: 'A location has been shared with you.',
            lat: 'Latitude is ',
            lon: 'and Longitude is ',
        },
        attachment: 'You have an attachment.',
    },
    'waiting.queue.message': {
        'contact.name': 'In Queue...',
        'header.text': 'In queue...',
        'first.Part': 'You are currently',
        'waiting.queue.number': '5',
        'last.part': ' in the waiting queue, our agents will get back to you shortly.'
    },
    'conversation.header.dropdown': {
        CSAT_RATING_TEXT: 'Rate this conversation',
        USER_OVERIDE_VOICE_OUTPUT_ON: 'Turn on text to speech',
        USER_OVERIDE_VOICE_OUTPUT_OFF: 'Turn off text to speech',
    },
};
