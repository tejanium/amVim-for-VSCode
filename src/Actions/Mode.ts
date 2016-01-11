import {window, commands} from 'vscode';
import {ModeID} from '../Modes/Mode';

export class ActionMode {

    static toNormal(): Thenable<boolean> {
        return commands.executeCommand(`vim.mode.${ModeID.NORMAL}`);
    }

    static toVisual(): Thenable<boolean> {
        return commands.executeCommand(`vim.mode.${ModeID.VISUAL}`);
    }

    static toVisualLine(): Thenable<boolean> {
        return commands.executeCommand(`vim.mode.${ModeID.VISUAL_LINE}`);
    }

    static toInsert(): Thenable<boolean> {
        return commands.executeCommand(`vim.mode.${ModeID.INSERT}`);
    }

    static switchByActiveSelections(currentMode: ModeID): Thenable<boolean> {
        const activeTextEditor = window.activeTextEditor;

        if (! activeTextEditor) {
            return Promise.resolve(false);
        }

        const selections = activeTextEditor.selections;

        let mode: ModeID;

        if (currentMode === ModeID.INSERT) {
            return Promise.resolve(true);
        }

        if (selections.every(selection => selection.isEmpty)) {
            mode = ModeID.NORMAL;
        }
        else {
            mode = ModeID.VISUAL;
        }

        if (mode === currentMode) {
            return Promise.resolve(true);
        }
        else if (mode === ModeID.VISUAL && currentMode === ModeID.VISUAL_LINE) {
            return Promise.resolve(true);
        }
        else {
            return commands.executeCommand(`vim.mode.${mode}`);
        }
    }

};
