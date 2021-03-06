/**
 * @module botbuilder
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { Activity, ConversationReference, ResourceResponse } from 'botbuilder-schema';

/**
 * Implemented by activity adapters
 */
export interface ActivityAdapter {
    /**
     * Handler that returns incoming activities to a single consumer. The `Bot` will set this
     * when the adapter is passed to its constructor. Just keep in mind that should the bots
     * adapter be replaced (like when running unit tests) this handler can end up being set
     * back to undefined.
     */
    onReceive: (activity: Activity) => Promise<void>;

    /**
     * Called by a consumer to send outgoing set of activities to a user.
     *
     * @param activities The set of activities to send.
     */
    post(activities: Partial<Activity>[]): Promise<ResourceResponse[]|undefined>;
}
/* istanbul ignore file */
