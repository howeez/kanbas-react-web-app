export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <br />
            <table>
                <tr>
                    <label htmlFor="wd-name">Assignment Name</label>
                </tr>
                <tr>
                    <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
                </tr>
                <tr>
                    <textarea id="wd-description">
                        The assignment is available online Submit a link to the landing page of
                    </textarea>
                </tr>
            </table>
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td align="left" valign="top">
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td align="left" valign="top">
                        <select defaultValue="ASSIGNMENTS" id="wd-submission-type">
                            <option value="ASSIGNMENTS">Assignments</option>
                            <option value="QUIZES">Quizes</option>
                            <option value="EXAMS">Exams</option>
                            <option value="LABS">Labs</option>
                        </select><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Display Grade as</label>
                    </td>
                    <td align="left" valign="top">
                        <select defaultValue="PERCENTAGE" id="wd-display-grade-as">
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="POINTS">Points</option>
                        </select><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td align="left" valign="top">
                        <select defaultValue="ONLINE" id="wd-submission-type">
                            <option value="ONLINE">Online</option>
                            <option value="IN-PERSON">In-Person</option>
                        </select><br />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        Online Entry Options
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="checkbox" name="wd-submission-type" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="checkbox" name="wd-submission-type" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="checkbox" name="wd-submission-type" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="checkbox" name="wd-submission-type" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="checkbox" name="wd-submission-type" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Upload</label><br /></td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        Assign
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>Assign To</td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input id="wd-assign-to" value="Everyone" /><br /><br />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        Due
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="date"
                            id="wd-due-date"
                            value="2000-01-21" /><br />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        Available from
                    </td>
                    <td>
                        Until
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                    <input type="date"
                            id="wd-available-from"
                            value="2000-01-21" /><br />
                    </td>
                    <td>
                    <input type="date"
                            id="wd-available-until"
                            value="2000-01-21" /><br />
                    </td>
                </tr>
                <tr>
                    <button>Cancel</button>
                    <button>Save</button>
                </tr>
            </table>
        </div>
    );
}
