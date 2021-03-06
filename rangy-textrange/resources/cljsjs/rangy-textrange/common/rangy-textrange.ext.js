// Generated with http://www.dotnetwise.com/code/externs/

var rangy = {
    "version": {},
    "initialized": {},
    "isBrowser": {},
    "supported": {},
    "util": {
        "isHostMethod": function () {},
        "isHostObject": function () {},
        "isHostProperty": function () {},
        "areHostMethods": function () {},
        "areHostObjects": function () {},
        "areHostProperties": function () {},
        "isTextRange": function () {},
        "getBody": function () {},
        "forEach": function () {},
        "extend": function () {},
        "createOptions": function () {},
        "toArray": function () {},
        "addListener": function () {},
        "deprecationNotice": function () {},
        "createAliasForDeprecatedMethod": function () {}
    },
    "features": {
        "implementsDomRange": {},
        "implementsTextRange": {},
        "crashyTextNodes": {},
        "htmlParsingConforms": {},
        "implementsWinGetSelection": {},
        "implementsDocSelection": {},
        "selectionHasAnchorAndFocus": {},
        "selectionHasExtend": {},
        "selectionHasRangeCount": {},
        "selectionSupportsMultipleRanges": {},
        "collapsedNonEditableSelectionsSupported": {},
        "implementsControlRange": {}
    },
    "modules": {
        "DomUtil": {
            "name": {},
            "dependencies": function () {},
            "initialized": {},
            "supported": {},
            "initializer": function () {},
            "init": function () {},
            "fail": function () {},
            "warn": function () {},
            "deprecationNotice": function () {},
            "createError": function () {}
        },
        "DomRange": {
            "name": {},
            "dependencies": {
                "0": {}
            },
            "initialized": {},
            "supported": {},
            "initializer": function () {},
            "init": function () {},
            "fail": function () {},
            "warn": function () {},
            "deprecationNotice": function () {},
            "createError": function () {}
        },
        "WrappedRange": {
            "name": {},
            "dependencies": {
                "0": {}
            },
            "initialized": {},
            "supported": {},
            "initializer": function () {},
            "init": function () {},
            "fail": function () {},
            "warn": function () {},
            "deprecationNotice": function () {},
            "createError": function () {}
        },
        "WrappedSelection": {
            "name": {},
            "dependencies": {
                "0": {},
                "1": {}
            },
            "initialized": {},
            "supported": {},
            "initializer": function () {},
            "init": function () {},
            "fail": function () {},
            "warn": function () {},
            "deprecationNotice": function () {},
            "createError": function () {}
        },
        "TextRange": {
            "name": {},
            "dependencies": {
                "0": {}
            },
            "initialized": {},
            "supported": {},
            "initializer": function () {},
            "init": function () {},
            "fail": function () {},
            "warn": function () {},
            "deprecationNotice": function () {},
            "createError": function () {}
        }
    },
    "config": {
        "alertOnFail": {},
        "alertOnWarn": {},
        "preferTextRange": {},
        "autoInitialize": {},
        "checkSelectionRanges": {}
    },
    "fail": function () {},
    "warn": function () {},
    "init": function () {},
    "addInitListener": function () {},
    "addShimListener": function () {},
    "createMissingNativeApi": function () {},
    "shim": function () {},
    "createModule": function () {},
    "createCoreModule": function () {},
    "RangePrototype": function () {},
    "rangePrototype": {
        "compareBoundaryPoints": function () {},
        "insertNode": function () {},
        "cloneContents": function () {},
        "canSurroundContents": function () {},
        "surroundContents": function () {},
        "cloneRange": function () {},
        "toString": function () {},
        "compareNode": function () {},
        "comparePoint": function () {},
        "createContextualFragment": function () {},
        "toHtml": function () {},
        "intersectsNode": function () {},
        "isPointInRange": function () {},
        "intersectsRange": function () {},
        "intersectsOrTouchesRange": function () {},
        "intersection": function () {},
        "union": function () {},
        "containsNode": function () {},
        "containsNodeContents": function () {},
        "containsRange": function () {},
        "containsNodeText": function () {},
        "getNodes": function () {},
        "getDocument": function () {},
        "collapseBefore": function () {},
        "collapseAfter": function () {},
        "getBookmark": function () {},
        "moveToBookmark": function () {},
        "getName": function () {},
        "equals": function () {},
        "isValid": function () {},
        "inspect": function () {},
        "detach": function () {},
        "select": function () {},
        "moveStart": function () {},
        "moveEnd": function () {},
        "move": function () {},
        "trimStart": function () {},
        "trimEnd": function () {},
        "trim": function () {},
        "expand": function () {},
        "text": function () {},
        "selectCharacters": function () {},
        "toCharacterRange": function () {},
        "findText": function () {},
        "pasteHtml": function () {}
    },
    "selectionPrototype": {
        "removeAllRanges": function () {},
        "addRange": function () {},
        "setRanges": function () {},
        "getRangeAt": function () {},
        "refresh": function () {},
        "removeRange": function () {},
        "isBackward": function () {},
        "isBackwards": function () {},
        "toString": function () {},
        "collapse": function () {},
        "collapseToStart": function () {},
        "collapseToEnd": function () {},
        "selectAllChildren": function () {},
        "deleteFromDocument": function () {},
        "eachRange": function () {},
        "getAllRanges": function () {},
        "setSingleRange": function () {},
        "callMethodOnEachRange": function () {},
        "setStart": function () {},
        "setEnd": function () {},
        "changeEachRange": function () {},
        "containsNode": function () {},
        "getBookmark": function () {},
        "moveToBookmark": function () {},
        "saveRanges": function () {},
        "restoreRanges": function () {},
        "toHtml": function () {},
        "getName": function () {},
        "inspect": function () {},
        "detach": function () {},
        "expand": function () {},
        "move": function () {},
        "trimStart": function () {},
        "trimEnd": function () {},
        "trim": function () {},
        "selectCharacters": function () {},
        "saveCharacterRanges": function () {},
        "restoreCharacterRanges": function () {},
        "text": function () {}
    },
    "dom": {
        "arrayContains": function () {},
        "isHtmlNamespace": function () {},
        "parentElement": function () {},
        "getNodeIndex": function () {},
        "getNodeLength": function () {},
        "getCommonAncestor": function () {},
        "isAncestorOf": function () {},
        "isOrIsAncestorOf": function () {},
        "getClosestAncestorIn": function () {},
        "isCharacterDataNode": function () {},
        "isTextOrCommentNode": function () {},
        "insertAfter": function () {},
        "splitDataNode": function () {},
        "getDocument": function () {},
        "getWindow": function () {},
        "getIframeWindow": function () {},
        "getIframeDocument": function () {},
        "getBody": function () {},
        "isWindow": function () {},
        "getContentDocument": function () {},
        "getRootContainer": function () {},
        "comparePoints": function () {},
        "isBrokenNode": function () {},
        "inspectNode": function () {},
        "getComputedStyleProperty": function () {},
        "createTestElement": function () {},
        "removeNode": function () {},
        "fragmentFromNodeChildren": function () {},
        "createIterator": function () {},
        "DomPosition": function () {},
        "nextNode": function () {},
        "previousNode": function () {}
    },
    "DOMException": function () {},
    "DomRange": function () {},
    "WrappedRange": function () {},
    "createNativeRange": function () {},
    "createRange": function () {},
    "createRangyRange": function () {},
    "createIframeRange": function () {},
    "createIframeRangyRange": function () {},
    "isSelectionValid": function () {},
    "getNativeSelection": function () {},
    "getSelection": function () {},
    "getIframeSelection": function () {},
    "Selection": function () {},
    "innerText": function () {},
    "createWordIterator": function () {},
    "noMutation": function () {},
    "textRange": {
        "isBlockNode": function () {},
        "isCollapsedWhitespaceNode": function () {},
        "createPosition": function () {}
    }
}

rangy.Selection.prototype = {
    "removeAllRanges": function () {},
    "addRange": function () {},
    "setRanges": function () {},
    "getRangeAt": function () {},
    "refresh": function () {},
    "removeRange": function () {},
    "isBackward": function () {},
    "isBackwards": function () {},
    "toString": function () {},
    "collapse": function () {},
    "collapseToStart": function () {},
    "collapseToEnd": function () {},
    "selectAllChildren": function () {},
    "deleteFromDocument": function () {},
    "eachRange": function () {},
    "getAllRanges": function () {},
    "setSingleRange": function () {},
    "callMethodOnEachRange": function () {},
    "setStart": function () {},
    "setEnd": function () {},
    "changeEachRange": function () {},
    "containsNode": function () {},
    "getBookmark": function () {},
    "moveToBookmark": function () {},
    "saveRanges": function () {},
    "restoreRanges": function () {},
    "toHtml": function () {},
    "getName": function () {},
    "inspect": function () {},
    "detach": function () {},
    "expand": function () {},
    "move": function () {},
    "trimStart": function () {},
    "trimEnd": function () {},
    "trim": function () {},
    "selectCharacters": function () {},
    "saveCharacterRanges": function () {},
    "restoreCharacterRanges": function () {},
    "text": function () {}
};