var sets = [
    {id:"Basic Set", items:[
	"C-g",     "keyboard-quit", "abort action, quit",
	"C-u",     "universal-argument", "set argument for command",
	"M-x",     "execute-extended-command", "run command",
	"C-x u, C-_", "undo",
	"C-x C-c", "save-buffers-kill-terminal", "exit emacs",
	"C-v",     "scroll-up", "next page",
	"M-v",     "scroll-down", "prev page",
	"C-a",     "move-beginning-of-line",
	"C-e",     "move-end-of-line",
	"M-a",     "backward-sentence",
	"M-e",     "forward-sentence",
	"M-<",     "beginning-of-buffer",
	"M->",     "end-of-buffer",
	"C-f",     "forward-char",
	"C-b",     "backward-char",
	"C-n",     "next-line",
	"C-p",     "previous-line",
	"M-f",     "forward-word",
	"M-b",     "backward-word",
	"C-d",     "delete-char",
	"M-d",     "kill-word",
	"M-DEL",   "backward-kill-word",
	"C-k",     "kill-line",
	"C-y",     "yank",
	"M-y",     "yank-pop",
	"C-w",     "kill-region",
	"M-w",     "kill-ring-save",
	"C-x C-f", "find-file", "open file",
	"C-x C-s", "save-buffer", "save file",
	"C-x b",   "switch-to-buffer",
	"C-x C-b", "list-buffers",
	"C-x k",   "kill-buffer",
	"C-h f",   "describe-function",
	"C-h k",   "describe-key",
	"C-h c",   "describe-key-briefly",
	"C-h m",   "describe-mode",
	"C-h a",   "apropos-command"
	"C-s",     "isearch-forward",
	"C-r",     "isearch-backward",
	"C-x 1",   "delete-other-windows",
	"C-x 2",   "split-window-vertically",
	"C-x 3",   "split-window-horizontally",
	"C-x o",   "other-window",
	"C-j",     "newline-and-indent",
	"C-M \\",  "indent-region"
    ]},

    {id:"Advanced Set", items:[
	"C-l",      "recenter-top-bottom",
	"C-M-v",    "scroll-other-window",
	"C-M-a",    "beginning-of-defun",
	"C-M-e",    "end-of-defun",
	"C-M-f",    "forward-sexp", 
	"C-M-b",    "backward-sexp",
	"C-S-DEL",  "kill-whole-line",
	"M-k",      "kill-sentence",
	"C-M-k",    "kill-sexp",
	"M-z char", "zap-to-char", "kill to char",
	"C-x s",    "save-some-buffers", "save all buffers",
	"C-x i",    "insert-file",
	"C-x C-w",  "write-file", "save as",
	"C-M-s",    "isearch-forward-regexp",
	"C-M-r",    "isearch-backward-regexp",
	"M-%",      "query-replace",
	"C-SPC",    "set-mark-command",
	"C-x C-x",  "exchange-point-and-mark",
	"C-M-h",    "mark-defun",
	"C-x h",    "mark-whole-buffer",
	"C-M-@",    "mark-sexp",
	"M-h",      "mark-paragraph",
	"C-x 0",    "delete-window",
	"C-x ^",    "enlarge-window",
	"C-x {",    "shrink-window-horizontally",
	"C-x }",    "enlarge-window-horizontally",
	"M-j",      "indent-new-comment-line",
	"M-^",      "delete-indentation",
	"M-\\",     "delete-horizontal-space",
	"C-o",      "open-line",
	"C-x C-o",  "delete-blank-lines",
	"M-^",      "delete-indentation",
	"M-SPC",    "just-one-space",
	"M-q",      "fill-paragraph",
	"M-u",      "upcase-word",
	"M-l",      "downcase-word",
	"M-c",      "capitalize-word",
	"C-t",      "transpose-char",
	"M-t",      "transpose-words",
	"C-x C-t",  "transpose-lines",
	"C-M-t",    "transpose-sexps",
	"M-.",      "find-tag",
	"M-/",      "dabbrev-expand", "expand word, autocomplete"
	"M-g g",    "goto-line",
	"C-x C-e",  "eval-last-sexp",
	"C-M-x",    "eval-defun"
    ]},

    {id:"Guru Set", items:[
C-x z
M-{, 
M-}, 
C-x [, 
C-x ], 
C-x DEL   backward-kill-sentence
M-- C-M-k
C-x TAB
C-x C-v 
C-x C-q
C-M-o
M-@  mark-word
C-x C-p  mark-page
M-$
M-!, 
M-|, 
C-u M-|
C-x =
C-q quoted-insert
C-x C-n, 
C-u C-x C-n
C-M-w  append-next-kill
    ]},

    {id:"erlang-mode", items:[
M-l      indent-for-comment - Insert a comment character to the right of the code 
C-c C-q  erlang-indent-function - Indents the current Erlang function.
M-q      erlang-fill-paragraph (comments)
C-c C-c  comment-region
C-c C-u  undo comment-region
C-a M-a  erlang-beginning-of-function 
C-a M-e  erlang-end-of-function
C-M-a    erlang-beginning-of-clause
C-M-e    erlang-end-of-clause 
C-c M-h  erlang-mark-function
C-M-h    erlang-mark-clause 
C-c C-j  erlang-generate-new-clause
C-c C-y  erlang-clone-arguments
C-c C-a  erlang-align-arrows
C-c C-z, erlang-shell-display
C-c C-k, erlang-compile 
C-c C-l, erlang-compile-display
C-x `    erlang-next-error 
    ]},

    {id:"Minibuffer", items:[
C-g  quit
C-o  open-line
M-p  previous-history-element
M-n  next-history-element
M-r  previous-matching-history-element
M-s  next-matching-history-element
TAB  minibuffer-complete
SPC  minibuffer-complete-word
RET  minibuffer-complete-and-exit
?    minibuffer-completion-help
C-x ESC ESC  repeat-complex-command
    ]},

    {id:"Help", items:[
C-h t
C-h C-h  help-for-help
C-h a    apropos-command
C-h c    describe-key-briefly
C-h k
C-h f
C-h m
C-h v
C-h .  display-local-help
    ]},

// Registers  page 81
    {id:"", items:[
    ]},

    {id:"", items:[
    ]},

    {}
];



