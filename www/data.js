var sets = [
    {id:"basic-set", items:[
	    ["C-g",     "keyboard-quit", "abort action, quit"],
	    ["C-u",     "universal-argument", "set argument for command"],
	    ["M-x",     "execute-extended-command", "run command"],
	    ["C-x u, C-_", "undo"],
	    ["C-x C-c", "save-buffers-kill-terminal", "exit emacs"],
	    ["C-v",     "scroll-up", "next page"],
	    ["M-v",     "scroll-down", "prev page"],
	    ["C-a",     "move-beginning-of-line"],
	    ["C-e",     "move-end-of-line"],
	    ["M-a",     "backward-sentence"],
	    ["M-e",     "forward-sentence"],
	    ["M-<",     "beginning-of-buffer"],
	    ["M->",     "end-of-buffer"],
	    ["C-f",     "forward-char"],
	    ["C-b",     "backward-char"],
	    ["C-n",     "next-line"],
	    ["C-p",     "previous-line"],
	    ["M-f",     "forward-word"],
	    ["M-b",     "backward-word"],
	    ["C-d",     "delete-char"],
	    ["M-d",     "kill-word"],
	    ["M-DEL",   "backward-kill-word"],
	    ["C-k",     "kill-line"],
	    ["C-y",     "yank"],
	    ["M-y",     "yank-pop"],
	    ["C-w",     "kill-region"],
	    ["M-w",     "kill-ring-save", "copy region"],
	    ["C-x C-f", "find-file", "open file"],
	    ["C-x C-s", "save-buffer", "save file"],
	    ["C-x b",   "switch-to-buffer"],
	    ["C-x C-b", "list-buffers"],
	    ["C-x k",   "kill-buffer"],
	    ["C-h f",   "describe-function"],
	    ["C-h k",   "describe-key"],
	    ["C-h c",   "describe-key-briefly"],
	    ["C-h m",   "describe-mode"],
	    ["C-h a",   "apropos-command"],
	    ["C-s",     "isearch-forward"],
	    ["C-r",     "isearch-backward"],
	    ["C-x 1",   "delete-other-windows"],
	    ["C-x 2",   "split-window-vertically"],
	    ["C-x 3",   "split-window-horizontally"],
	    ["C-x o",   "other-window"],
	    ["C-j",     "newline-and-indent"],
	    ["C-M \\",  "indent-region"]
    ]},

    {id:"advanced-set", items:[
	    ["C-l",      "recenter-top-bottom"],
	    ["M-r",      "move-to-window-line-top-bottom", "position point relative to window"],
	    ["C-M-v",    "scroll-other-window"],
	    ["C-M-a",    "beginning-of-defun"],
	    ["C-M-e",    "end-of-defun"],
	    ["C-M-f",    "forward-sexp"], 
	    ["C-M-b",    "backward-sexp"],
	    ["C-S-DEL",  "kill-whole-line"],
	    ["M-k",      "kill-sentence"],
	    ["C-M-k",    "kill-sexp"],
	    ["M-z char", "zap-to-char", "kill to char"],
	    ["C-x s",    "save-some-buffers", "save all buffers"],
	    ["C-x i",    "insert-file"],
	    ["C-x C-w",  "write-file", "save as"],
	    ["C-M-s",    "isearch-forward-regexp"],
	    ["C-M-r",    "isearch-backward-regexp"],
	    ["M-%",      "query-replace"],
	    ["C-SPC",    "set-mark-command"],
	    ["C-x C-x",  "exchange-point-and-mark"],
	    ["C-M-h",    "mark-defun"],
	    ["C-x h",    "mark-whole-buffer"],
	    ["C-M-@",    "mark-sexp"],
	    ["M-h",      "mark-paragraph"],
	    ["C-x 0",    "delete-window"],
	    ["C-x ^",    "enlarge-window"],
	    ["C-x {",    "shrink-window-horizontally"],
	    ["C-x }",    "enlarge-window-horizontally"],
	    ["M-j",      "indent-new-comment-line"],
	    ["M-\\",     "delete-horizontal-space"],
	    ["C-o",      "open-line"],
	    ["C-x C-o",  "delete-blank-lines"],
	    ["M-^",      "delete-indentation"],
	    ["M-SPC",    "just-one-space"],
	    ["M-q",      "fill-paragraph"],
	    ["M-u",      "upcase-word"],
	    ["M-l",      "downcase-word"],
	    ["M-c",      "capitalize-word"],
	    ["C-x C-u",  "upcase-region"],
	    ["C-x C-l",  "downcase-region"],
	    ["C-t",      "transpose-char"],
	    ["M-t",      "transpose-words"],
	    ["C-x C-t",  "transpose-lines"],
	    ["C-M-t",    "transpose-sexps"],
	    ["M-.",      "find-tag"],
	    ["M-/",      "dabbrev-expand", "expand word, autocomplete"],
	    ["M-g g",    "goto-line"],
	    ["C-x C-e",  "eval-last-sexp"],
	    ["C-M-x",    "eval-defun"],
        ["C-x (", "kmacro-start-macro"],
        ["C-x )", "kmacro-end-macro"],
        ["C-x e", "kmacro-end-and-call-macro"]
    ]},

    {id:"erlang-mode", items:[
	    ["M-l",     "indent-for-comment", "insert comment symbol to the end of line"],
	    ["C-c C-q", "erlang-indent-function"],
	    ["M-q",     "erlang-fill-paragraph", "in comments"],
	    ["C-c C-c", "comment-region"],
	    ["C-c C-u", "undo comment-region"],
	    ["C-a M-a", "erlang-beginning-of-function"],
	    ["C-a M-e", "erlang-end-of-function"],
	    ["C-M-a",   "erlang-beginning-of-clause"],
	    ["C-M-e",   "erlang-end-of-clause"],
	    ["C-c M-h", "erlang-mark-function"],
	    ["C-M-h",   "erlang-mark-clause"],
	    ["C-c C-j", "erlang-generate-new-clause"],
	    ["C-c C-y", "erlang-clone-arguments"],
	    ["C-c C-a", "erlang-align-arrows"],
	    ["C-c C-z", "erlang-shell-display"],
	    ["C-c C-k", "erlang-compile"],
	    ["C-c C-l", "erlang-compile-display"],
	    ["C-x `",   "erlang-next-error"]
    ]},

    {id:"distel", items:[
        ["C-c C-d n", "erl-choose-nodename"],
        ["C-c C-d g", "erl-ping"],
        ["M-?",       "erl-complete"],
        ["M-.",       "erl-find-source-under-point"],
        ["M-,",       "erl-find-source-unwind"],
        ["C-c C-d F", "erl-find-module"],
        ["C-c C-d w", "erl-who-calls"],
        ["C-c C-d L", "erl-reload-module"],
        ["C-c C-d r", "erl-reload-modules"],
        ["C-c C-d e", "erl-ie-show-session", "interactive shell"],
        ["C-c C-d :", "erl-eval-expression"],
        ["C-c C-d f", "erl-refactor-subfunction"],
        ["C-c C-d A", "erl-show-arglist"],
        ["C-c C-d h", "erl-find-doc-under-point"],
        ["C-c C-d H", "erl-find-doc"],
        ["C-c C-d z", "erl-find-sig-under-point"],
        ["C-c C-d Z", "erl-find-sig"],
        ["C-c C-d d", "erl-fdoc-describe"],
        ["C-c C-d a", "erl-fdoc-apropos"],
        ["C-c C-d l", "erl-process-list"],
        ["C-c C-d m", "edb-monitor"],          
        ["C-c C-d p", "fprof"],
        ["C-c C-d P", "fprof-analyse"],
	    ["", ""]
    ]},

    {id:"objc-mode", items:[
        ["C-c C-a",    "c-toggle-auto-newline"],
        ["C-c C-c",    "comment-region"],
        ["C-c C-d",    "c-hungry-delete-forward"],
        ["C-c C-DEL",  "c-hungry-delete-backward"],
        ["C-c C-e",    "c-macro-expand"],
        ["C-c C-l",    "c-toggle-electric-state"],
        ["C-c C-n",    "c-forward-conditional"],
        ["C-c C-p",    "c-backward-conditional"],
        ["C-c C-u",    "c-up-conditional"],
        ["C-c C-o",    "c-set-offset"],
        ["C-c C-q",    "c-indent-defun"],
        ["C-c C-s",    "c-show-syntactic-information"],
        ["C-c C-w",    "subword-mode"],
        ["C-c C-\\",   "c-backslash-region"],
        ["C-c .",      "c-set-style"],
        ["C-M-a",      "c-beginning-of-defun"],
        ["C-M-e",      "c-end-of-defun"],
        ["C-M-h",      "c-mark-function"],
        ["C-M-j",      "c-indent-new-comment-line"],
        ["C-M-q",      "c-indent-exp"],
        ["M-a",        "c-beginning-of-statement"],
        ["M-e",        "c-end-of-statement"],
        ["M-j",        "c-indent-new-comment-line"],
        ["M-q",        "c-fill-paragraph"]
    ]},

    {id:"guru-set", items:[
	    ["C-x z",   "repeat"],
	    ["M-{",     "backward-paragraph"],
	    ["M-}",     "forward-paragraph"],
	    ["C-x [",   "backward-page"],
	    ["C-x ]",   "forward-page"],
	    ["C-x DEL", "backward-kill-sentence"],
	    ["M--",     "negative-argument"],
	    ["C-x TAB", "indent-rigidly"],
	    ["C-x C-v", "find-alternate-file", "replace active buffer"],
	    ["C-x C-q", "toggle-read-only"],
	    ["C-M-o",   "split-line"],
	    ["M-@",     "mark-word"],
	    ["C-x C-p", "mark-page"],
	    ["M-$",     "ispell-word"],
	    ["M-!",     "shell-command"],
	    ["M-|",     "shell-command-on-region"],
	    ["C-x =",   "what-cursor-position"],
	    ["C-q",     "quoted-insert", "insert a non-graphic character"],
	    ["C-x 8 RET", "ucs-insert", "insert a character based on its Unicode name or code-point"],
	    ["C-x C-n", "set-goal-column"],
	    ["C-M-w",   "append-next-kill"],
	    ["C-x l",   "count-lines-page", "report number of lines on current page"],
	    ["M-=",     "count-lines-region", "print number of lines and characters in the region"]
    ]},

    {id:"minibuffer", items:[
	    ["C-g", "quit"],
	    ["C-o", "open-line"],
	    ["M-p", "previous-history-element"],
	    ["M-n", "next-history-element"],
	    ["M-r", "previous-matching-history-element"],
	    ["M-s", "next-matching-history-element"],
	    ["TAB", "minibuffer-complete"],
	    ["SPC", "minibuffer-complete-word"],
	    ["RET", "minibuffer-complete-and-exit"],
	    ["?",   "minibuffer-completion-help"],
	    ["C-x ESC ESC", "repeat-complex-command"]
    ]},

    {id:"help", items:[
	    ["C-h t", "help-with-tutorial"],
	    ["C-h C-h", "help-for-help"],
	    ["C-h a", "apropos-command"],
	    ["C-h c", "describe-key-briefly"],
	    ["C-h k", "describe-key"],
	    ["C-h f", "describe-function"],
	    ["C-h m", "describe-mode"],
	    ["C-h v", "describe-variable"],
	    ["C-h .", "display-local-help"]
    ]},

    {id:"mark-and-region", items:[
	    ["C-SPC",     "set-mark-command"],
	    ["C-x C-x",   "exchange-point-and-mark"],
	    ["M-@",       "mark-word"],
	    ["C-M-@",     "mark-sexp"],
	    ["M-h",       "mark-paragraph"],
	    ["C-M-h",     "mark-defun"],
	    ["C-x C-p",   "mark-page"],
	    ["C-x h",     "mark-whole-buffer"],
	    ["C-x C-SPC", "global-pop-mark", "jump to last mark in global mark ring"]
    ]},

    {id:"killing-and-moving-text", items:[
	    ["C-d",      "delete-char"],
	    ["DEL",      "delete-backward-char"],
	    ["M-\\",     "delete-horizontal-space"],
	    ["M-SPC",    "just-one-space"],
	    ["C-x C-o",  "delete-blank-lines"],
	    ["M-^",      "delete-indentation"],
	    ["C-k",      "kill-line"],
	    ["C-S-DEL",  "kill-whole-line"],
	    ["C-w",      "kill-region"],
	    ["M-w",      "kill-ring-save", "copy region"],
	    ["M-d",      "kill-word"],
	    ["M-DEL",    "backward-kill-word"],
	    ["C-x DEL",  "backward-kill-sentence"],
	    ["M-k",      "kill-sentence"],
	    ["C-M-k",    "kill-sexp"],
	    ["M-z char", "zap-to-char"],
	    ["C-y",      "yank"],
	    ["M-y",      "yank-pop"],
	    ["C-M-w",    "append-next-kill"]
    ]},

    {id:"registers-and-bookmarks", items:[
	    ["C-x r SPC reg",   "point-to-register", "copy postion to register"],
	    ["C-x r j reg",   "jump-to-register"],
	    ["C-x r s reg",   "copy-to-register", "copy region to register"],
	    ["C-x r i reg",   "insert-register", "insert text from register"],
	    ["C-x r m",   "bookmark-set", "set bookmark at a point"],
	    ["C-x r b name",   "bookmark-jump"],
	    ["C-x r l",   "list-bookmarks"]
    ]},

    {id:"searching-and-replacement", items:[
	    ["C-s",   "isearch-forward"],
	    ["C-r",   "isearch-backward"],
	    ["C-s RET string RET", "search-forward", "non incremental search"],
	    ["C-r RET string RET", "search-backward", "non incremental search"],
	    ["M-s w",   "isearch-forward-word", "search a sequence of words without regard to how the words are separated"],
	    ["C-M-s",   "isearch-forward-regexp"],
	    ["C-M-r",   "isearch-backward-regexp"],
	    ["M-%",     "query-replace"],
	    ["C-M-%",   "query-replace-regexp"],
	    ["SPC (y)", "replace this one, go on to next", "in query-replace mode"],
	    ["DEL (n)", "skip to next without replacing", "in query-replace mode"],
	    ["comma",   "replace this one and stay here", "in query-replace mode"],
	    ["period",  "replace this one and exit", "in query-replace mode"],
	    ["!",       "replace all remaining matches", "in query-replace mode"],
	    ["^",       "back up to previous match", "in query-replace mode"],
	    ["RET (q)", "exit", "in query-replace mode"],
	    ["e",       "edit replacement string in minibuffer", "in query-replace mode"],
	    ["C-h",     "help", "in query-replace mode"]
    ]},

    {id:"xmonad", title:"XMonad (bonus :)", items:[
	    ["M-j",   "next window"],
	    ["M-k",   "prev window"],
	    ["M-m",   "focus to master window"],
	    ["M-SPC",   "change layout"],
	    ["M-S-SPC",   "default layout"],
	    ["M-3",   "switch to workspace"],
	    ["M-S-3",   "move window to workspace"],
	    ["M-S-RET",   "launch terminal"],
	    ["M-p",   "launch dmenu"],
	    ["M-S-c",   "close window"],
	    ["M-RET",   "swap focused window and master window"],
	    ["M-S-j",   "swap focused window with the next window"],
	    ["M-S-k",   "swap focused window with the prev window"],
	    ["M-l",   "expand the master area"],
	    ["M-h",   "shrink the master area"],
	    ["M-,",   "increment the number of windows in the master area"],
	    ["M-.",   "decrement the number of windows in the master area"],
	    ["M-b",   "toggle the status bar gap"],
	    ["M-q",   "restart xmonad"],
	    ["M-S-q",   "quit xmonad"]
    ]}

    /*
      {id:"", items:[
	  ["",   ""],
	  ["",   ""],
	  ["",   ""],
	  ["",   ""],
      ]}
    */
];



