// Lifecycle
export const INIT = 'INIT' // initial config
export const READY = 'READY' // config was parsed

// Chapters
export const SET_CHAPTERS_LIST = 'SET_CHAPTERS_LIST'
export const NEXT_CHAPTER = 'NEXT_CHAPTER'
export const PREVIOUS_CHAPTER = 'PREVIOUS_CHAPTER'
export const SET_CHAPTER = 'SET_CHAPTER'
export const UPDATE_CHAPTER = 'UPDATE_CHAPTER'

// Steppers
export const STEP_FORWARD = 'STEP_FORWARD'
export const STEP_BACKWARDS = 'STEP_BACKWARDS'

// Components
export const SHOW_COMPONENT_INFO = 'SHOW_COMPONENT_INFO'
export const SHOW_COMPONENT_SHOW_TITLE = 'SHOW_COMPONENT_SHOW_TITLE'
export const SHOW_COMPONENT_EPISODE_TITLE = 'SHOW_COMPONENT_EPISODE_TITLE'
export const SHOW_COMPONENT_SUBTITLE = 'SHOW_COMPONENT_SUBTITLE'
export const SHOW_COMPONENT_INFO_POSTER = 'SHOW_COMPONENT_INFO_POSTER'
export const SHOW_COMPONENT_ERROR = 'SHOW_COMPONENT_ERROR'
export const SHOW_COMPONENT_CONTROLS_CHAPTERS = 'SHOW_COMPONENT_CONTROLS_CHAPTERS'
export const SHOW_COMPONENT_CONTROLS_STEPPERS = 'SHOW_COMPONENT_CONTROLS_STEPPERS'
export const SHOW_COMPONENT_CONTROLS_BUTTON_LOADING = 'SHOW_COMPONENT_CONTROLS_BUTTON_LOADING'
export const SHOW_COMPONENT_CONTROLS_BUTTON_REPLAY = 'SHOW_COMPONENT_CONTROLS_BUTTON_REPLAY'
export const SHOW_COMPONENT_CONTROLS_BUTTON_REMAINING = 'SHOW_COMPONENT_CONTROLS_BUTTON_REMAINING'
export const SHOW_COMPONENT_CONTROLS_BUTTON_DURATION = 'SHOW_COMPONENT_CONTROLS_BUTTON_DURATION'
export const SHOW_COMPONENT_CONTROLS_BUTTON_RETRY = 'SHOW_COMPONENT_CONTROLS_BUTTON_RETRY'
export const SHOW_COMPONENT_CONTROLS_BUTTON_PLAYING = 'SHOW_COMPONENT_CONTROLS_BUTTON_PLAYING'
export const SHOW_COMPONENT_CONTROLS_BUTTON_PAUSE = 'SHOW_COMPONENT_CONTROLS_BUTTON_PAUSE'
export const SHOW_COMPONENT_PROGRESSBAR = 'SHOW_COMPONENT_PROGRESSBAR'
export const SHOW_COMPONENT_TAB = 'SHOW_COMPONENT_TAB'
export const SHOW_COMPONENT_VOLUME_SLIDER = 'SHOW_COMPONENT_VOLUME_SLIDER'
export const SHOW_COMPONENT_RATE_SLIDER = 'SHOW_COMPONENT_RATE_SLIDER'
export const SHOW_COMPONENT_CHANNELS = 'SHOW_COMPONENT_CHANNELS'
export const SHOW_COMPONENT_CONTROLS_BUTTON = 'SHOW_COMPONENT_CONTROLS_BUTTON'

export const HIDE_COMPONENT_INFO = 'HIDE_COMPONENT_INFO'
export const HIDE_COMPONENT_SHOW_TITLE = 'HIDE_COMPONENT_SHOW_TITLE'
export const HIDE_COMPONENT_EPISODE_TITLE = 'HIDE_COMPONENT_EPISODE_TITLE'
export const HIDE_COMPONENT_SUBTITLE = 'HIDE_COMPONENT_SUBTITLE'
export const HIDE_COMPONENT_INFO_POSTER = 'HIDE_COMPONENT_INFO_POSTER'
export const HIDE_COMPONENT_ERROR = 'HIDE_COMPONENT_ERROR'
export const HIDE_COMPONENT_CONTROLS_CHAPTERS = 'HIDE_COMPONENT_CONTROLS_CHAPTERS'
export const HIDE_COMPONENT_CONTROLS_STEPPERS = 'HIDE_COMPONENT_CONTROLS_STEPPERS'
export const HIDE_COMPONENT_CONTROLS_BUTTON = 'HIDE_COMPONENT_CONTROLS_BUTTON'
export const HIDE_COMPONENT_PROGRESSBAR = 'HIDE_COMPONENT_PROGRESSBAR'
export const HIDE_COMPONENT_TAB = 'HIDE_COMPONENT_TAB'
export const HIDE_COMPONENT_VOLUME_SLIDER = 'HIDE_COMPONENT_VOLUME_SLIDER'
export const HIDE_COMPONENT_RATE_SLIDER = 'HIDE_COMPONENT_RATE_SLIDER'
export const HIDE_COMPONENT_CHANNELS = 'HIDE_COMPONENT_CHANNELS'

// Error
export const BACKEND_ERROR = 'BACKEND_ERROR'
export const NETWORK_EMPTY = 'NETWORK_EMPTY'
export const NETWORK_NO_SOURCE = 'NETWORK_NO_SOURCE'
export const ERROR_MISSING_AUDIO_FILES = 'ERROR_MISSING_AUDIO_FILES'
export const ERROR_POSTER_LOAD = 'ERROR_POSTER_LOAD'

// Progress
export const SIMULATE_PLAYTIME = 'SIMULATE_PLAYTIME'
export const ENABLE_GHOST_MODE = 'ENABLE_GHOST_MODE'
export const DISABLE_GHOST_MODE = 'DISABLE_GHOST_MODE'

// Player
export const REQUEST_PLAY = 'REQUEST_PLAY'
export const BACKEND_PLAY = 'BACKEND_PLAY'
export const REQUEST_PAUSE = 'REQUEST_PAUSE'
export const BACKEND_PAUSE = 'BACKEND_PAUSE'
export const REQUEST_RESTART = 'REQUEST_RESTART'
export const BACKEND_BUFFER = 'BACKEND_BUFFER'
export const STOP = 'STOP'
export const IDLE = 'IDLE'
export const BACKEND_LOADING_START = 'BACKEND_LOADING_START'
export const BACKEND_LOADING_END = 'BACKEND_LOADING_END'
export const REQUEST_LOAD = 'REQUEST_LOAD'
export const LOADED = 'LOADED'
export const BACKEND_END = 'BACKEND_END'

// Audio
export const MUTE = 'MUTE'
export const UNMUTE = 'UNMUTE'
export const SET_VOLUME = 'SET_VOLUME'
export const SET_RATE = 'SET_RATE'

// Timepiece
export const BACKEND_DURATION = 'BACKEND_DURATION'
export const BACKEND_PLAYTIME = 'BACKEND_PLAYTIME'
export const REQUEST_PLAYTIME = 'REQUEST_PLAYTIME'
export const UPDATE_PLAYTIME = 'UPDATE_PLAYTIME'

// Quantiles
export const LOAD_QUANTILES = 'LOAD_QUANTILES'
export const SET_QUANTILE = 'SET_QUANTILE'

// Runtime
export const SET_RUNTIME = 'SET_RUNTIME'
export const SET_LANGUAGE = 'SET_LANGUAGE'
export const SET_VERSION = 'SET_VERSION'
export const SET_MODE = 'SET_MODE'

// Share
export const SELECT_CONTENT = 'SELECT_CONTENT'
export const SELECT_CHANNEL = 'SELECT_CHANNEL'
export const SELECT_EMBED_SIZE = 'SELECT_EMBED_SIZE'

// Tabs
export const TOGGLE_TAB = 'TOGGLE_TAB'
export const SET_TABS = 'SET_TABS'

// Theme
export const SET_THEME = 'SET_THEME'

// Transcripts
export const SET_TRANSCRIPTS_TIMELINE = 'SET_TRANSCRIPTS_TIMELINE'
export const UPDATE_TRANSCRIPTS = 'UPDATE_TRANSCRIPTS'
export const TOGGLE_FOLLOW_TRANSCRIPTS = 'TOGGLE_FOLLOW_TRANSCRIPTS'
export const SEARCH_TRANSCRIPTS = 'SEARCH_TRANSCRIPTS'
export const SET_SEARCH_TRANSCRIPTS_RESULTS = 'SET_SEARCH_TRANSCRIPTS_RESULTS'
export const NEXT_SEARCH_RESULT = 'NEXT_SEARCH_RESULT'
export const PREVIOUS_SEARCH_RESULT = 'PREVIOUS_SEARCH_RESULT'
export const RESET_SEARCH_TRANSCRIPTS = 'RESET_SEARCH_TRANSCRIPTS'
