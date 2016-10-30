var Ammo = {};
/**
	@constructor
	@param {Number} [x]
	@param {Number} [y]
	@param {Number} [z]
*/
Ammo.btVector3 = function(x, y, z) {};
/**
	@function
	@return {Number}
*/
Ammo.btVector3.prototype.length = function() {
	return 0;
};
/**
	@function
	@return {Number}
*/
Ammo.btVector3.prototype.x = function() {
	return 0;
};
/**
	@function
	@return {Number}
*/
Ammo.btVector3.prototype.y = function() {
	return 0;
};
/**
	@function
	@return {Number}
*/
Ammo.btVector3.prototype.z = function() {
	return 0;
};
/**
	@function
	@param {Number} x
*/
Ammo.btVector3.prototype.setX = function(x) {};
/**
	@function
	@param {Number} y
*/
Ammo.btVector3.prototype.setY = function(y) {};
/**
	@function
	@param {Number} z
*/
Ammo.btVector3.prototype.setZ = function(z) {};
/**
	@function
	@param {Number} x
	@param {Number} y
	@param {Number} z
*/
Ammo.btVector3.prototype.setValue = function(x, y, z) {};
/**
	@function
*/
Ammo.btVector3.prototype.normalize = function() {};
/**
	@function
	@param {Ammo.btVector3} v
	@return {Number}
*/
Ammo.btVector3.prototype.dot = function(v) {
	return 0;
};
/**
	@function
	@param {Number} x
	@return {Ammo.btVector3}
*/
Ammo.btVector3.prototype.op_mul = function(x) {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} v
	@return {Ammo.btVector3}
*/
Ammo.btVector3.prototype.op_add = function(v) {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} v
	@return {Ammo.btVector3}
*/
Ammo.btVector3.prototype.op_sub = function(v) {
	return null;
};

/**
	@constructor
	@implements Ammo.btVector3
	@param {Number} [x]
	@param {Number} [y]
	@param {Number} [z]
	@param {Number} [w]
*/
Ammo.btVector4 = function(x, y, z, w) {};
/**
	@function
	@return {Number}
*/
Ammo.btVector4.prototype.w = function() {
	return 0;
};
/**
	@function
	@param {Number} x
	@param {Number} y
	@param {Number} [z]
	@param {Number} [w]
*/
Ammo.btVector4.prototype.setValue = function(x, y, z, w) {};
/**
	@constructor
	@implements Ammo.btVector3
	@param {Number} [x]
	@param {Number} [y]
	@param {Number} [z]
*/
Ammo.btVector4 = function(x, y, z) {};
/**
	@function
	@return {Number}
*/
Ammo.btVector4.prototype.length = function() {
	return 0;
};
/**
	@function
	@return {Number}
*/
Ammo.btVector4.prototype.x = function() {
	return 0;
};
/**
	@function
	@return {Number}
*/
Ammo.btVector4.prototype.y = function() {
	return 0;
};
/**
	@function
	@return {Number}
*/
Ammo.btVector4.prototype.z = function() {
	return 0;
};
/**
	@function
	@param {Number} x
*/
Ammo.btVector4.prototype.setX = function(x) {};
/**
	@function
	@param {Number} y
*/
Ammo.btVector4.prototype.setY = function(y) {};
/**
	@function
	@param {Number} z
*/
Ammo.btVector4.prototype.setZ = function(z) {};
/**
	@function
	@param {Number} x
	@param {Number} y
	@param {Number} z
*/
Ammo.btVector4.prototype.setValue = function(x, y, z) {};
/**
	@function
	@param {Ammo.btVector3} v
	@return {Number}
*/
Ammo.btVector4.prototype.dot = function(v) {
	return 0;
};
/**
	@function
	@param {Number} x
	@return {Ammo.btVector3}
*/
Ammo.btVector4.prototype.op_mul = function(x) {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} v
	@return {Ammo.btVector3}
*/
Ammo.btVector4.prototype.op_add = function(v) {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} v
	@return {Ammo.btVector3}
*/
Ammo.btVector4.prototype.op_sub = function(v) {
	return null;
};

/**
	@function
	@return {Number}
*/
Ammo.btQuadWord.prototype.x = function() {
	return 0;
};
/**
	@function
	@return {Number}
*/
Ammo.btQuadWord.prototype.y = function() {
	return 0;
};
/**
	@function
	@return {Number}
*/
Ammo.btQuadWord.prototype.z = function() {
	return 0;
};
/**
	@function
	@return {Number}
*/
Ammo.btQuadWord.prototype.w = function() {
	return 0;
};
/**
	@function
	@param {Number} x
*/
Ammo.btQuadWord.prototype.setX = function(x) {};
/**
	@function
	@param {Number} y
*/
Ammo.btQuadWord.prototype.setY = function(y) {};
/**
	@function
	@param {Number} z
*/
Ammo.btQuadWord.prototype.setZ = function(z) {};
/**
	@function
	@param {Number} w
*/
Ammo.btQuadWord.prototype.setW = function(w) {};

/**
	@constructor
	@implements Ammo.btQuadWord
	@param {Number} x
	@param {Number} y
	@param {Number} z
	@param {Number} w
*/
Ammo.btQuaternion = function(x, y, z, w) {};
/**
	@function
	@param {Number} x
	@param {Number} y
	@param {Number} z
	@param {Number} w
*/
Ammo.btQuaternion.prototype.setValue = function(x, y, z, w) {};
/**
	@function
	@param {Number} z
	@param {Number} y
	@param {Number} x
*/
Ammo.btQuaternion.prototype.setEulerZYX = function(z, y, x) {};
/**
	@function
*/
Ammo.btQuaternion.prototype.normalize = function() {};
/**
	@function
	@return {Number}
*/
Ammo.btQuaternion.prototype.x = function() {
	return 0;
};
/**
	@function
	@return {Number}
*/
Ammo.btQuaternion.prototype.y = function() {
	return 0;
};
/**
	@function
	@return {Number}
*/
Ammo.btQuaternion.prototype.z = function() {
	return 0;
};
/**
	@function
	@return {Number}
*/
Ammo.btQuaternion.prototype.w = function() {
	return 0;
};
/**
	@function
	@param {Number} x
*/
Ammo.btQuaternion.prototype.setX = function(x) {};
/**
	@function
	@param {Number} y
*/
Ammo.btQuaternion.prototype.setY = function(y) {};
/**
	@function
	@param {Number} z
*/
Ammo.btQuaternion.prototype.setZ = function(z) {};
/**
	@function
	@param {Number} w
*/
Ammo.btQuaternion.prototype.setW = function(w) {};

/**
	@function
	@param {Number} ex
	@param {Number} ey
	@param {Number} ez
*/
Ammo.btMatrix3x3.prototype.setEulerZYX = function(ex, ey, ez) {};
/**
	@function
	@param {Ammo.btQuaternion} q
*/
Ammo.btMatrix3x3.prototype.getRotation = function(q) {};
/**
	@function
	@param {Number} y
	@return {Ammo.btVector3}
*/
Ammo.btMatrix3x3.prototype.getRow = function(y) {
	return null;
};

/**
	@constructor
	@param {Ammo.btQuaternion} [q]
	@param {Ammo.btVector3} [v]
*/
Ammo.btTransform = function(q, v) {};
/**
	@function
*/
Ammo.btTransform.prototype.setIdentity = function() {};
/**
	@function
	@param {Ammo.btVector3} origin
*/
Ammo.btTransform.prototype.setOrigin = function(origin) {};
/**
	@function
	@param {Ammo.btQuaternion} rotation
*/
Ammo.btTransform.prototype.setRotation = function(rotation) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btTransform.prototype.getOrigin = function() {
	return null;
};
/**
	@function
	@return {Ammo.btQuaternion}
*/
Ammo.btTransform.prototype.getRotation = function() {
	return null;
};
/**
	@function
	@return {Ammo.btMatrix3x3}
*/
Ammo.btTransform.prototype.getBasis = function() {
	return null;
};
/**
	@function
	@param {Array<Number>} m
*/
Ammo.btTransform.prototype.setFromOpenGLMatrix = function(m) {};

/**
	@function
	@param {Ammo.btTransform} worldTrans
*/
Ammo.btMotionState.prototype.getWorldTransform = function(worldTrans) {};
/**
	@function
	@param {Ammo.btTransform} worldTrans
*/
Ammo.btMotionState.prototype.setWorldTransform = function(worldTrans) {};

/**
	@constructor
	@implements Ammo.btMotionState
	@param {Ammo.btTransform} [startTrans]
	@param {Ammo.btTransform} [centerOfMassOffset]
*/
Ammo.btDefaultMotionState = function(startTrans, centerOfMassOffset) {};
/**
	@function
	@return {Ammo.btTransform}
*/
Ammo.btDefaultMotionState.prototype.get_m_graphicsWorldTrans = function() {
	return null;
};
/**
	@function
	@param {Ammo.btTransform} value
*/
Ammo.btDefaultMotionState.prototype.set_m_graphicsWorldTrans = function(value) {};
/**
	@function
	@param {Ammo.btTransform} worldTrans
*/
Ammo.btDefaultMotionState.prototype.getWorldTransform = function(worldTrans) {};
/**
	@function
	@param {Ammo.btTransform} worldTrans
*/
Ammo.btDefaultMotionState.prototype.setWorldTransform = function(worldTrans) {};

/**
	@function
	@param {Ammo.btVector3} anisotropicFriction
	@param {Number} frictionMode
*/
Ammo.btCollisionObject.prototype.setAnisotropicFriction = function(anisotropicFriction, frictionMode) {};
/**
	@function
	@return {Ammo.btCollisionShape}
*/
Ammo.btCollisionObject.prototype.getCollisionShape = function() {
	return null;
};
/**
	@function
	@param {Number} contactProcessingThreshold
*/
Ammo.btCollisionObject.prototype.setContactProcessingThreshold = function(contactProcessingThreshold) {};
/**
	@function
	@param {Number} newState
*/
Ammo.btCollisionObject.prototype.setActivationState = function(newState) {};
/**
	@function
	@param {Number} newState
*/
Ammo.btCollisionObject.prototype.forceActivationState = function(newState) {};
/**
	@function
	@param {Boolean} [forceActivation]
*/
Ammo.btCollisionObject.prototype.activate = function(forceActivation) {};
/**
	@function
	@return {Boolean}
*/
Ammo.btCollisionObject.prototype.isActive = function() {
	return false;
};
/**
	@function
	@return {Boolean}
*/
Ammo.btCollisionObject.prototype.isKinematicObject = function() {
	return false;
};
/**
	@function
	@param {Number} rest
*/
Ammo.btCollisionObject.prototype.setRestitution = function(rest) {};
/**
	@function
	@param {Number} frict
*/
Ammo.btCollisionObject.prototype.setFriction = function(frict) {};
/**
	@function
	@param {Number} frict
*/
Ammo.btCollisionObject.prototype.setRollingFriction = function(frict) {};
/**
	@function
	@return {Ammo.btTransform}
*/
Ammo.btCollisionObject.prototype.getWorldTransform = function() {
	return null;
};
/**
	@function
	@return {Number}
*/
Ammo.btCollisionObject.prototype.getCollisionFlags = function() {
	return 0;
};
/**
	@function
	@param {Number} flags
*/
Ammo.btCollisionObject.prototype.setCollisionFlags = function(flags) {};
/**
	@function
	@param {Ammo.btTransform} worldTrans
*/
Ammo.btCollisionObject.prototype.setWorldTransform = function(worldTrans) {};
/**
	@function
	@param {Ammo.btCollisionShape} collisionShape
*/
Ammo.btCollisionObject.prototype.setCollisionShape = function(collisionShape) {};
/**
	@function
	@param {Number} ccdMotionThreshold
*/
Ammo.btCollisionObject.prototype.setCcdMotionThreshold = function(ccdMotionThreshold) {};
/**
	@function
	@param {Number} radius
*/
Ammo.btCollisionObject.prototype.setCcdSweptSphereRadius = function(radius) {};
/**
	@function
	@return {Number}
*/
Ammo.btCollisionObject.prototype.getUserIndex = function() {
	return 0;
};
/**
	@function
	@param {Number} index
*/
Ammo.btCollisionObject.prototype.setUserIndex = function(index) {};
/**
	@function
	@return {*}
*/
Ammo.btCollisionObject.prototype.getUserPointer = function() {
	return null;
};
/**
	@function
	@param {*} userPointer
*/
Ammo.btCollisionObject.prototype.setUserPointer = function(userPointer) {};


/**
	@function
	@return {Boolean}
*/
Ammo.RayResultCallback.prototype.hasHit = function() {
	return false;
};
/**
	@function
	@return {Number}
*/
Ammo.RayResultCallback.prototype.get_m_collisionFilterGroup = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.RayResultCallback.prototype.set_m_collisionFilterGroup = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.RayResultCallback.prototype.get_m_collisionFilterMask = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.RayResultCallback.prototype.set_m_collisionFilterMask = function(value) {};
/**
	@function
	@return {Ammo.btCollisionObject}
*/
Ammo.RayResultCallback.prototype.get_m_collisionObject = function() {
	return null;
};
/**
	@function
	@param {Ammo.btCollisionObject} value
*/
Ammo.RayResultCallback.prototype.set_m_collisionObject = function(value) {};

/**
	@constructor
	@implements Ammo.RayResultCallback
	@param {Ammo.btVector3} from
	@param {Ammo.btVector3} to
*/
Ammo.ClosestRayResultCallback = function(from, to) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.ClosestRayResultCallback.prototype.get_m_rayFromWorld = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.ClosestRayResultCallback.prototype.set_m_rayFromWorld = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.ClosestRayResultCallback.prototype.get_m_rayToWorld = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.ClosestRayResultCallback.prototype.set_m_rayToWorld = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.ClosestRayResultCallback.prototype.get_m_hitNormalWorld = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.ClosestRayResultCallback.prototype.set_m_hitNormalWorld = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.ClosestRayResultCallback.prototype.get_m_hitPointWorld = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.ClosestRayResultCallback.prototype.set_m_hitPointWorld = function(value) {};
/**
	@function
	@return {Boolean}
*/
Ammo.ClosestRayResultCallback.prototype.hasHit = function() {
	return false;
};
/**
	@function
	@return {Number}
*/
Ammo.ClosestRayResultCallback.prototype.get_m_collisionFilterGroup = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.ClosestRayResultCallback.prototype.set_m_collisionFilterGroup = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.ClosestRayResultCallback.prototype.get_m_collisionFilterMask = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.ClosestRayResultCallback.prototype.set_m_collisionFilterMask = function(value) {};
/**
	@function
	@return {Ammo.btCollisionObject}
*/
Ammo.ClosestRayResultCallback.prototype.get_m_collisionObject = function() {
	return null;
};
/**
	@function
	@param {Ammo.btCollisionObject} value
*/
Ammo.ClosestRayResultCallback.prototype.set_m_collisionObject = function(value) {};

/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btManifoldPoint.prototype.getPositionWorldOnA = function() {
	return null;
};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btManifoldPoint.prototype.getPositionWorldOnB = function() {
	return null;
};
/**
	@function
	@return {*}
*/
Ammo.btManifoldPoint.prototype.getAppliedImpulse = function() {
	return null;
};
/**
	@function
	@return {*}
*/
Ammo.btManifoldPoint.prototype.getDistance = function() {
	return null;
};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btManifoldPoint.prototype.get_m_localPointA = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.btManifoldPoint.prototype.set_m_localPointA = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btManifoldPoint.prototype.get_m_localPointB = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.btManifoldPoint.prototype.set_m_localPointB = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btManifoldPoint.prototype.get_m_positionWorldOnB = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.btManifoldPoint.prototype.set_m_positionWorldOnB = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btManifoldPoint.prototype.get_m_positionWorldOnA = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.btManifoldPoint.prototype.set_m_positionWorldOnA = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btManifoldPoint.prototype.get_m_normalWorldOnB = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.btManifoldPoint.prototype.set_m_normalWorldOnB = function(value) {};

/**
	@function
	@param {Ammo.btManifoldPoint} cp
	@param {Ammo.btCollisionObjectWrapper} colObj0Wrap
	@param {Number} partId0
	@param {Number} index0
	@param {Ammo.btCollisionObjectWrapper} colObj1Wrap
	@param {Number} partId1
	@param {Number} index1
	@return {Number}
*/
Ammo.ContactResultCallback.prototype.addSingleResult = function(cp, colObj0Wrap, partId0, index0, colObj1Wrap, partId1, index1) {
	return 0;
};

/**
	@constructor
*/
Ammo.ConcreteContactResultCallback = function() {};
/**
	@function
	@param {Ammo.btManifoldPoint} cp
	@param {Ammo.btCollisionObjectWrapper} colObj0Wrap
	@param {Number} partId0
	@param {Number} index0
	@param {Ammo.btCollisionObjectWrapper} colObj1Wrap
	@param {Number} partId1
	@param {Number} index1
	@return {Number}
*/
Ammo.ConcreteContactResultCallback.prototype.addSingleResult = function(cp, colObj0Wrap, partId0, index0, colObj1Wrap, partId1, index1) {
	return 0;
};

/**
	@function
	@return {Number}
*/
Ammo.LocalShapeInfo.prototype.get_m_shapePart = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.LocalShapeInfo.prototype.set_m_shapePart = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.LocalShapeInfo.prototype.get_m_triangleIndex = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.LocalShapeInfo.prototype.set_m_triangleIndex = function(value) {};

/**
	@constructor
	@param {Ammo.btCollisionObject} hitCollisionObject
	@param {Ammo.LocalShapeInfo} localShapeInfo
	@param {Ammo.btVector3} hitNormalLocal
	@param {Ammo.btVector3} hitPointLocal
	@param {Number} hitFraction
*/
Ammo.LocalConvexResult = function(hitCollisionObject, localShapeInfo, hitNormalLocal, hitPointLocal, hitFraction) {};
/**
	@function
	@return {Ammo.btCollisionObject}
*/
Ammo.LocalConvexResult.prototype.get_m_hitCollisionObject = function() {
	return null;
};
/**
	@function
	@param {Ammo.btCollisionObject} value
*/
Ammo.LocalConvexResult.prototype.set_m_hitCollisionObject = function(value) {};
/**
	@function
	@return {Ammo.LocalShapeInfo}
*/
Ammo.LocalConvexResult.prototype.get_m_localShapeInfo = function() {
	return null;
};
/**
	@function
	@param {Ammo.LocalShapeInfo} value
*/
Ammo.LocalConvexResult.prototype.set_m_localShapeInfo = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.LocalConvexResult.prototype.get_m_hitNormalLocal = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.LocalConvexResult.prototype.set_m_hitNormalLocal = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.LocalConvexResult.prototype.get_m_hitPointLocal = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.LocalConvexResult.prototype.set_m_hitPointLocal = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.LocalConvexResult.prototype.get_m_hitFraction = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.LocalConvexResult.prototype.set_m_hitFraction = function(value) {};

/**
	@function
	@return {Boolean}
*/
Ammo.ConvexResultCallback.prototype.hasHit = function() {
	return false;
};
/**
	@function
	@return {Number}
*/
Ammo.ConvexResultCallback.prototype.get_m_collisionFilterGroup = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.ConvexResultCallback.prototype.set_m_collisionFilterGroup = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.ConvexResultCallback.prototype.get_m_collisionFilterMask = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.ConvexResultCallback.prototype.set_m_collisionFilterMask = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.ConvexResultCallback.prototype.get_m_closestHitFraction = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.ConvexResultCallback.prototype.set_m_closestHitFraction = function(value) {};

/**
	@constructor
	@implements Ammo.ConvexResultCallback
	@param {Ammo.btVector3} convexFromWorld
	@param {Ammo.btVector3} convexToWorld
*/
Ammo.ClosestConvexResultCallback = function(convexFromWorld, convexToWorld) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.ClosestConvexResultCallback.prototype.get_m_convexFromWorld = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.ClosestConvexResultCallback.prototype.set_m_convexFromWorld = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.ClosestConvexResultCallback.prototype.get_m_convexToWorld = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.ClosestConvexResultCallback.prototype.set_m_convexToWorld = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.ClosestConvexResultCallback.prototype.get_m_hitNormalWorld = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.ClosestConvexResultCallback.prototype.set_m_hitNormalWorld = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.ClosestConvexResultCallback.prototype.get_m_hitPointWorld = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.ClosestConvexResultCallback.prototype.set_m_hitPointWorld = function(value) {};
/**
	@function
	@return {Boolean}
*/
Ammo.ClosestConvexResultCallback.prototype.hasHit = function() {
	return false;
};
/**
	@function
	@return {Number}
*/
Ammo.ClosestConvexResultCallback.prototype.get_m_collisionFilterGroup = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.ClosestConvexResultCallback.prototype.set_m_collisionFilterGroup = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.ClosestConvexResultCallback.prototype.get_m_collisionFilterMask = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.ClosestConvexResultCallback.prototype.set_m_collisionFilterMask = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.ClosestConvexResultCallback.prototype.get_m_closestHitFraction = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.ClosestConvexResultCallback.prototype.set_m_closestHitFraction = function(value) {};

/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btCollisionShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btCollisionShape.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btCollisionShape.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btCollisionShape.prototype.getMargin = function() {
	return 0;
};

/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btConvexShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btConvexShape.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btConvexShape.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btConvexShape.prototype.getMargin = function() {
	return 0;
};

/**
	@constructor
	@implements Ammo.btConvexShape
	@param {Ammo.btStridingMeshInterface} meshInterface
	@param {Boolean} [calcAabb]
*/
Ammo.btConvexTriangleMeshShape = function(meshInterface, calcAabb) {};
/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btConvexTriangleMeshShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btConvexTriangleMeshShape.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btConvexTriangleMeshShape.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btConvexTriangleMeshShape.prototype.getMargin = function() {
	return 0;
};

/**
	@constructor
	@implements Ammo.btCollisionShape
	@param {Ammo.btVector3} boxHalfExtents
*/
Ammo.btBoxShape = function(boxHalfExtents) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btBoxShape.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btBoxShape.prototype.getMargin = function() {
	return 0;
};
/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btBoxShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btBoxShape.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btCollisionShape
	@param {Number} radius
	@param {Number} height
*/
Ammo.btCapsuleShape = function(radius, height) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btCapsuleShape.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btCapsuleShape.prototype.getMargin = function() {
	return 0;
};
/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btCapsuleShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btCapsuleShape.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btCapsuleShape
	@param {Number} radius
	@param {Number} height
*/
Ammo.btCapsuleShapeX = function(radius, height) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btCapsuleShapeX.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btCapsuleShapeX.prototype.getMargin = function() {
	return 0;
};
/**
	@constructor
	@implements Ammo.btCapsuleShape
	@param {Number} radius
	@param {Number} height
*/
Ammo.btCapsuleShapeX = function(radius, height) {};
/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btCapsuleShapeX.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btCapsuleShapeX.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btCapsuleShape
	@param {Number} radius
	@param {Number} height
*/
Ammo.btCapsuleShapeZ = function(radius, height) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btCapsuleShapeZ.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btCapsuleShapeZ.prototype.getMargin = function() {
	return 0;
};
/**
	@constructor
	@implements Ammo.btCapsuleShape
	@param {Number} radius
	@param {Number} height
*/
Ammo.btCapsuleShapeZ = function(radius, height) {};
/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btCapsuleShapeZ.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btCapsuleShapeZ.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btCollisionShape
	@param {Ammo.btVector3} halfExtents
*/
Ammo.btCylinderShape = function(halfExtents) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btCylinderShape.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btCylinderShape.prototype.getMargin = function() {
	return 0;
};
/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btCylinderShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btCylinderShape.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btCylinderShape
	@param {Ammo.btVector3} halfExtents
*/
Ammo.btCylinderShapeX = function(halfExtents) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btCylinderShapeX.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btCylinderShapeX.prototype.getMargin = function() {
	return 0;
};
/**
	@constructor
	@implements Ammo.btCylinderShape
	@param {Ammo.btVector3} halfExtents
*/
Ammo.btCylinderShapeX = function(halfExtents) {};
/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btCylinderShapeX.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btCylinderShapeX.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btCylinderShape
	@param {Ammo.btVector3} halfExtents
*/
Ammo.btCylinderShapeZ = function(halfExtents) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btCylinderShapeZ.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btCylinderShapeZ.prototype.getMargin = function() {
	return 0;
};
/**
	@constructor
	@implements Ammo.btCylinderShape
	@param {Ammo.btVector3} halfExtents
*/
Ammo.btCylinderShapeZ = function(halfExtents) {};
/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btCylinderShapeZ.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btCylinderShapeZ.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btCollisionShape
	@param {Number} radius
*/
Ammo.btSphereShape = function(radius) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btSphereShape.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btSphereShape.prototype.getMargin = function() {
	return 0;
};
/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btSphereShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btSphereShape.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btCollisionShape
	@param {Number} radius
	@param {Number} height
*/
Ammo.btConeShape = function(radius, height) {};
/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btConeShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btConeShape.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btConeShape.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btConeShape.prototype.getMargin = function() {
	return 0;
};

/**
	@constructor
	@implements Ammo.btCollisionShape
*/
Ammo.btConvexHullShape = function() {};
/**
	@function
	@param {Ammo.btVector3} point
	@param {Boolean} [recalculateLocalAABB]
*/
Ammo.btConvexHullShape.prototype.addPoint = function(point, recalculateLocalAABB) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btConvexHullShape.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btConvexHullShape.prototype.getMargin = function() {
	return 0;
};
/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btConvexHullShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btConvexHullShape.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btConeShape
	@param {Number} radius
	@param {Number} height
*/
Ammo.btConeShapeX = function(radius, height) {};
/**
	@constructor
	@implements Ammo.btConeShape
	@param {Number} radius
	@param {Number} height
*/
Ammo.btConeShapeX = function(radius, height) {};
/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btConeShapeX.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btConeShapeX.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btConeShapeX.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btConeShapeX.prototype.getMargin = function() {
	return 0;
};

/**
	@constructor
	@implements Ammo.btConeShape
	@param {Number} radius
	@param {Number} height
*/
Ammo.btConeShapeZ = function(radius, height) {};
/**
	@constructor
	@implements Ammo.btConeShape
	@param {Number} radius
	@param {Number} height
*/
Ammo.btConeShapeZ = function(radius, height) {};
/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btConeShapeZ.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btConeShapeZ.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btConeShapeZ.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btConeShapeZ.prototype.getMargin = function() {
	return 0;
};

/**
	@constructor
	@implements Ammo.btCollisionShape
	@param {Boolean} [enableDynamicAabbTree]
*/
Ammo.btCompoundShape = function(enableDynamicAabbTree) {};
/**
	@function
	@param {Ammo.btTransform} localTransform
	@param {Ammo.btCollisionShape} shape
*/
Ammo.btCompoundShape.prototype.addChildShape = function(localTransform, shape) {};
/**
	@function
	@param {Number} childShapeindex
*/
Ammo.btCompoundShape.prototype.removeChildShapeByIndex = function(childShapeindex) {};
/**
	@function
	@return {Number}
*/
Ammo.btCompoundShape.prototype.getNumChildShapes = function() {
	return 0;
};
/**
	@function
	@param {Number} index
	@return {Ammo.btCollisionShape}
*/
Ammo.btCompoundShape.prototype.getChildShape = function(index) {
	return null;
};
/**
	@function
	@param {Number} margin
*/
Ammo.btCompoundShape.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btCompoundShape.prototype.getMargin = function() {
	return 0;
};
/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btCompoundShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btCompoundShape.prototype.calculateLocalInertia = function(mass, inertia) {};


/**
	@constructor
	@implements Ammo.btStridingMeshInterface
	@param {Boolean} [use32bitIndices]
	@param {Boolean} [use4componentVertices]
*/
Ammo.btTriangleMesh = function(use32bitIndices, use4componentVertices) {};
/**
	@function
	@param {Ammo.btVector3} vertex0
	@param {Ammo.btVector3} vertex1
	@param {Ammo.btVector3} vertex2
	@param {Boolean} [removeDuplicateVertices]
*/
Ammo.btTriangleMesh.prototype.addTriangle = function(vertex0, vertex1, vertex2, removeDuplicateVertices) {};

/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btConcaveShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btConcaveShape.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btConcaveShape.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btConcaveShape.prototype.getMargin = function() {
	return 0;
};

/**
	@constructor
	@implements Ammo.btConcaveShape
	@param {Ammo.btVector3} planeNormal
	@param {Number} planeConstant
*/
Ammo.btStaticPlaneShape = function(planeNormal, planeConstant) {};
/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btStaticPlaneShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btStaticPlaneShape.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btStaticPlaneShape.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btStaticPlaneShape.prototype.getMargin = function() {
	return 0;
};

/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btTriangleMeshShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btTriangleMeshShape.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btTriangleMeshShape.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btTriangleMeshShape.prototype.getMargin = function() {
	return 0;
};

/**
	@constructor
	@implements Ammo.btTriangleMeshShape
	@param {Ammo.btStridingMeshInterface} meshInterface
	@param {Boolean} useQuantizedAabbCompression
	@param {Boolean} [buildBvh]
*/
Ammo.btBvhTriangleMeshShape = function(meshInterface, useQuantizedAabbCompression, buildBvh) {};
/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btBvhTriangleMeshShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btBvhTriangleMeshShape.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btBvhTriangleMeshShape.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btBvhTriangleMeshShape.prototype.getMargin = function() {
	return 0;
};

/**
	@constructor
	@implements Ammo.btConcaveShape
	@param {Number} heightStickWidth
	@param {Number} heightStickLength
	@param {*} heightfieldData
	@param {Number} heightScale
	@param {Number} minHeight
	@param {Number} maxHeight
	@param {Number} upAxis
	@param {*} hdt
	@param {Boolean} flipQuadEdges
*/
Ammo.btHeightfieldTerrainShape = function(heightStickWidth, heightStickLength, heightfieldData, heightScale, minHeight, maxHeight, upAxis, hdt, flipQuadEdges) {};
/**
	@function
	@param {Number} margin
*/
Ammo.btHeightfieldTerrainShape.prototype.setMargin = function(margin) {};
/**
	@function
	@return {Number}
*/
Ammo.btHeightfieldTerrainShape.prototype.getMargin = function() {
	return 0;
};
/**
	@function
	@param {Ammo.btVector3} scaling
*/
Ammo.btHeightfieldTerrainShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btHeightfieldTerrainShape.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
*/
Ammo.btDefaultCollisionConstructionInfo = function() {};

/**
	@constructor
	@param {Ammo.btDefaultCollisionConstructionInfo} [info]
*/
Ammo.btDefaultCollisionConfiguration = function(info) {};

/**
	@constructor
*/
Ammo.btPersistentManifold = function() {};
/**
	@function
	@return {Ammo.btCollisionObject}
*/
Ammo.btPersistentManifold.prototype.getBody0 = function() {
	return null;
};
/**
	@function
	@return {Ammo.btCollisionObject}
*/
Ammo.btPersistentManifold.prototype.getBody1 = function() {
	return null;
};
/**
	@function
	@return {Number}
*/
Ammo.btPersistentManifold.prototype.getNumContacts = function() {
	return 0;
};
/**
	@function
	@param {Number} index
	@return {Ammo.btManifoldPoint}
*/
Ammo.btPersistentManifold.prototype.getContactPoint = function(index) {
	return null;
};

/**
	@function
	@return {Number}
*/
Ammo.btDispatcher.prototype.getNumManifolds = function() {
	return 0;
};
/**
	@function
	@param {Number} index
	@return {Ammo.btPersistentManifold}
*/
Ammo.btDispatcher.prototype.getManifoldByIndexInternal = function(index) {
	return null;
};

/**
	@constructor
	@implements Ammo.btDispatcher
	@param {Ammo.btDefaultCollisionConfiguration} conf
*/
Ammo.btCollisionDispatcher = function(conf) {};
/**
	@function
	@return {Number}
*/
Ammo.btCollisionDispatcher.prototype.getNumManifolds = function() {
	return 0;
};
/**
	@function
	@param {Number} index
	@return {Ammo.btPersistentManifold}
*/
Ammo.btCollisionDispatcher.prototype.getManifoldByIndexInternal = function(index) {
	return null;
};


/**
	@function
	@param {Ammo.btOverlappingPairCallback} ghostPairCallback
*/
Ammo.btOverlappingPairCache.prototype.setInternalGhostPairCallback = function(ghostPairCallback) {};

/**
	@constructor
	@param {Ammo.btVector3} worldAabbMin
	@param {Ammo.btVector3} worldAabbMax
	@param {Number} [maxHandles]
	@param {Ammo.btOverlappingPairCache} [pairCache]
	@param {Boolean} [disableRaycastAccelerator]
*/
Ammo.btAxisSweep3 = function(worldAabbMin, worldAabbMax, maxHandles, pairCache, disableRaycastAccelerator) {};



/**
	@constructor
*/
Ammo.btDbvtBroadphase = function() {};

/**
	@constructor
	@param {Number} mass
	@param {Ammo.btMotionState} motionState
	@param {Ammo.btCollisionShape} collisionShape
	@param {Ammo.btVector3} [localInertia]
*/
Ammo.btRigidBodyConstructionInfo = function(mass, motionState, collisionShape, localInertia) {};
/**
	@function
	@return {Number}
*/
Ammo.btRigidBodyConstructionInfo.prototype.get_m_linearDamping = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btRigidBodyConstructionInfo.prototype.set_m_linearDamping = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btRigidBodyConstructionInfo.prototype.get_m_angularDamping = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btRigidBodyConstructionInfo.prototype.set_m_angularDamping = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btRigidBodyConstructionInfo.prototype.get_m_friction = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btRigidBodyConstructionInfo.prototype.set_m_friction = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btRigidBodyConstructionInfo.prototype.get_m_rollingFriction = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btRigidBodyConstructionInfo.prototype.set_m_rollingFriction = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btRigidBodyConstructionInfo.prototype.get_m_restitution = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btRigidBodyConstructionInfo.prototype.set_m_restitution = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btRigidBodyConstructionInfo.prototype.get_m_linearSleepingThreshold = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btRigidBodyConstructionInfo.prototype.set_m_linearSleepingThreshold = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btRigidBodyConstructionInfo.prototype.get_m_angularSleepingThreshold = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btRigidBodyConstructionInfo.prototype.set_m_angularSleepingThreshold = function(value) {};
/**
	@function
	@return {Boolean}
*/
Ammo.btRigidBodyConstructionInfo.prototype.get_m_additionalDamping = function() {
	return false;
};
/**
	@function
	@param {Boolean} value
*/
Ammo.btRigidBodyConstructionInfo.prototype.set_m_additionalDamping = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btRigidBodyConstructionInfo.prototype.get_m_additionalDampingFactor = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btRigidBodyConstructionInfo.prototype.set_m_additionalDampingFactor = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btRigidBodyConstructionInfo.prototype.get_m_additionalLinearDampingThresholdSqr = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btRigidBodyConstructionInfo.prototype.set_m_additionalLinearDampingThresholdSqr = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btRigidBodyConstructionInfo.prototype.get_m_additionalAngularDampingThresholdSqr = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btRigidBodyConstructionInfo.prototype.set_m_additionalAngularDampingThresholdSqr = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btRigidBodyConstructionInfo.prototype.get_m_additionalAngularDampingFactor = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btRigidBodyConstructionInfo.prototype.set_m_additionalAngularDampingFactor = function(value) {};

/**
	@constructor
	@implements Ammo.btCollisionObject
	@param {Ammo.btRigidBodyConstructionInfo} constructionInfo
*/
Ammo.btRigidBody = function(constructionInfo) {};
/**
	@function
	@return {Ammo.btTransform}
*/
Ammo.btRigidBody.prototype.getCenterOfMassTransform = function() {
	return null;
};
/**
	@function
	@param {Ammo.btTransform} xform
*/
Ammo.btRigidBody.prototype.setCenterOfMassTransform = function(xform) {};
/**
	@function
	@param {Number} linear
	@param {Number} angular
*/
Ammo.btRigidBody.prototype.setSleepingThresholds = function(linear, angular) {};
/**
	@function
	@param {Number} lin_damping
	@param {Number} ang_damping
*/
Ammo.btRigidBody.prototype.setDamping = function(lin_damping, ang_damping) {};
/**
	@function
	@param {Number} mass
	@param {Ammo.btVector3} inertia
*/
Ammo.btRigidBody.prototype.setMassProps = function(mass, inertia) {};
/**
	@function
	@param {Ammo.btVector3} linearFactor
*/
Ammo.btRigidBody.prototype.setLinearFactor = function(linearFactor) {};
/**
	@function
	@param {Ammo.btVector3} torque
*/
Ammo.btRigidBody.prototype.applyTorque = function(torque) {};
/**
	@function
	@param {Ammo.btVector3} torque
*/
Ammo.btRigidBody.prototype.applyLocalTorque = function(torque) {};
/**
	@function
	@param {Ammo.btVector3} force
	@param {Ammo.btVector3} rel_pos
*/
Ammo.btRigidBody.prototype.applyForce = function(force, rel_pos) {};
/**
	@function
	@param {Ammo.btVector3} force
*/
Ammo.btRigidBody.prototype.applyCentralForce = function(force) {};
/**
	@function
	@param {Ammo.btVector3} force
*/
Ammo.btRigidBody.prototype.applyCentralLocalForce = function(force) {};
/**
	@function
	@param {Ammo.btVector3} torque
*/
Ammo.btRigidBody.prototype.applyTorqueImpulse = function(torque) {};
/**
	@function
	@param {Ammo.btVector3} impulse
	@param {Ammo.btVector3} rel_pos
*/
Ammo.btRigidBody.prototype.applyImpulse = function(impulse, rel_pos) {};
/**
	@function
	@param {Ammo.btVector3} impulse
*/
Ammo.btRigidBody.prototype.applyCentralImpulse = function(impulse) {};
/**
	@function
*/
Ammo.btRigidBody.prototype.updateInertiaTensor = function() {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btRigidBody.prototype.getLinearVelocity = function() {
	return null;
};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btRigidBody.prototype.getAngularVelocity = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} lin_vel
*/
Ammo.btRigidBody.prototype.setLinearVelocity = function(lin_vel) {};
/**
	@function
	@param {Ammo.btVector3} ang_vel
*/
Ammo.btRigidBody.prototype.setAngularVelocity = function(ang_vel) {};
/**
	@function
	@return {Ammo.btMotionState}
*/
Ammo.btRigidBody.prototype.getMotionState = function() {
	return null;
};
/**
	@function
	@param {Ammo.btMotionState} motionState
*/
Ammo.btRigidBody.prototype.setMotionState = function(motionState) {};
/**
	@function
	@param {Ammo.btVector3} angularFactor
*/
Ammo.btRigidBody.prototype.setAngularFactor = function(angularFactor) {};
/**
	@function
	@param {Ammo.btCollisionObject} colObj
	@return {Ammo.btRigidBody}
*/
Ammo.btRigidBody.prototype.upcast = function(colObj) {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} anisotropicFriction
	@param {Number} frictionMode
*/
Ammo.btRigidBody.prototype.setAnisotropicFriction = function(anisotropicFriction, frictionMode) {};
/**
	@function
	@return {Ammo.btCollisionShape}
*/
Ammo.btRigidBody.prototype.getCollisionShape = function() {
	return null;
};
/**
	@function
	@param {Number} contactProcessingThreshold
*/
Ammo.btRigidBody.prototype.setContactProcessingThreshold = function(contactProcessingThreshold) {};
/**
	@function
	@param {Number} newState
*/
Ammo.btRigidBody.prototype.setActivationState = function(newState) {};
/**
	@function
	@param {Number} newState
*/
Ammo.btRigidBody.prototype.forceActivationState = function(newState) {};
/**
	@function
	@param {Boolean} [forceActivation]
*/
Ammo.btRigidBody.prototype.activate = function(forceActivation) {};
/**
	@function
	@return {Boolean}
*/
Ammo.btRigidBody.prototype.isActive = function() {
	return false;
};
/**
	@function
	@return {Boolean}
*/
Ammo.btRigidBody.prototype.isKinematicObject = function() {
	return false;
};
/**
	@function
	@param {Number} rest
*/
Ammo.btRigidBody.prototype.setRestitution = function(rest) {};
/**
	@function
	@param {Number} frict
*/
Ammo.btRigidBody.prototype.setFriction = function(frict) {};
/**
	@function
	@param {Number} frict
*/
Ammo.btRigidBody.prototype.setRollingFriction = function(frict) {};
/**
	@function
	@return {Ammo.btTransform}
*/
Ammo.btRigidBody.prototype.getWorldTransform = function() {
	return null;
};
/**
	@function
	@return {Number}
*/
Ammo.btRigidBody.prototype.getCollisionFlags = function() {
	return 0;
};
/**
	@function
	@param {Number} flags
*/
Ammo.btRigidBody.prototype.setCollisionFlags = function(flags) {};
/**
	@function
	@param {Ammo.btTransform} worldTrans
*/
Ammo.btRigidBody.prototype.setWorldTransform = function(worldTrans) {};
/**
	@function
	@param {Ammo.btCollisionShape} collisionShape
*/
Ammo.btRigidBody.prototype.setCollisionShape = function(collisionShape) {};
/**
	@function
	@param {Number} ccdMotionThreshold
*/
Ammo.btRigidBody.prototype.setCcdMotionThreshold = function(ccdMotionThreshold) {};
/**
	@function
	@param {Number} radius
*/
Ammo.btRigidBody.prototype.setCcdSweptSphereRadius = function(radius) {};
/**
	@function
	@return {Number}
*/
Ammo.btRigidBody.prototype.getUserIndex = function() {
	return 0;
};
/**
	@function
	@param {Number} index
*/
Ammo.btRigidBody.prototype.setUserIndex = function(index) {};
/**
	@function
	@return {*}
*/
Ammo.btRigidBody.prototype.getUserPointer = function() {
	return null;
};
/**
	@function
	@param {*} userPointer
*/
Ammo.btRigidBody.prototype.setUserPointer = function(userPointer) {};

/**
	@constructor
*/
Ammo.btConstraintSetting = function() {};
/**
	@function
	@return {Number}
*/
Ammo.btConstraintSetting.prototype.get_m_tau = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btConstraintSetting.prototype.set_m_tau = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btConstraintSetting.prototype.get_m_damping = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btConstraintSetting.prototype.set_m_damping = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btConstraintSetting.prototype.get_m_impulseClamp = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btConstraintSetting.prototype.set_m_impulseClamp = function(value) {};

/**
	@function
	@param {Boolean} needsFeedback
*/
Ammo.btTypedConstraint.prototype.enableFeedback = function(needsFeedback) {};
/**
	@function
	@return {Number}
*/
Ammo.btTypedConstraint.prototype.getBreakingImpulseThreshold = function() {
	return 0;
};
/**
	@function
	@param {Number} threshold
*/
Ammo.btTypedConstraint.prototype.setBreakingImpulseThreshold = function(threshold) {};

/**
	@constructor
	@implements Ammo.btTypedConstraint
	@param {Ammo.btRigidBody} rbA
	@param {Ammo.btRigidBody} [rbB]
	@param {Ammo.btVector3} [pivotInA]
	@param {Ammo.btVector3} [pivotInB]
*/
Ammo.btPoint2PointConstraint = function(rbA, rbB, pivotInA, pivotInB) {};
/**
	@function
	@param {Ammo.btVector3} pivotA
*/
Ammo.btPoint2PointConstraint.prototype.setPivotA = function(pivotA) {};
/**
	@function
	@param {Ammo.btVector3} pivotB
*/
Ammo.btPoint2PointConstraint.prototype.setPivotB = function(pivotB) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btPoint2PointConstraint.prototype.getPivotInA = function() {
	return null;
};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btPoint2PointConstraint.prototype.getPivotInB = function() {
	return null;
};
/**
	@function
	@return {Ammo.btConstraintSetting}
*/
Ammo.btPoint2PointConstraint.prototype.get_m_setting = function() {
	return null;
};
/**
	@function
	@param {Ammo.btConstraintSetting} value
*/
Ammo.btPoint2PointConstraint.prototype.set_m_setting = function(value) {};
/**
	@function
	@param {Boolean} needsFeedback
*/
Ammo.btPoint2PointConstraint.prototype.enableFeedback = function(needsFeedback) {};
/**
	@function
	@return {Number}
*/
Ammo.btPoint2PointConstraint.prototype.getBreakingImpulseThreshold = function() {
	return 0;
};
/**
	@function
	@param {Number} threshold
*/
Ammo.btPoint2PointConstraint.prototype.setBreakingImpulseThreshold = function(threshold) {};

/**
	@constructor
	@implements Ammo.btTypedConstraint
	@param {Ammo.btRigidBody} rbA
	@param {Ammo.btRigidBody} rbB
	@param {Ammo.btTransform} [frameInA]
	@param {Ammo.btTransform} [frameInB]
	@param {Boolean} [useLinearFrameReferenceFrameA]
*/
Ammo.btGeneric6DofConstraint = function(rbA, rbB, frameInA, frameInB, useLinearFrameReferenceFrameA) {};
/**
	@function
	@param {Ammo.btVector3} linearLower
*/
Ammo.btGeneric6DofConstraint.prototype.setLinearLowerLimit = function(linearLower) {};
/**
	@function
	@param {Ammo.btVector3} linearUpper
*/
Ammo.btGeneric6DofConstraint.prototype.setLinearUpperLimit = function(linearUpper) {};
/**
	@function
	@param {Ammo.btVector3} angularLower
*/
Ammo.btGeneric6DofConstraint.prototype.setAngularLowerLimit = function(angularLower) {};
/**
	@function
	@param {Ammo.btVector3} angularUpper
*/
Ammo.btGeneric6DofConstraint.prototype.setAngularUpperLimit = function(angularUpper) {};
/**
	@function
	@param {Boolean} needsFeedback
*/
Ammo.btGeneric6DofConstraint.prototype.enableFeedback = function(needsFeedback) {};
/**
	@function
	@return {Number}
*/
Ammo.btGeneric6DofConstraint.prototype.getBreakingImpulseThreshold = function() {
	return 0;
};
/**
	@function
	@param {Number} threshold
*/
Ammo.btGeneric6DofConstraint.prototype.setBreakingImpulseThreshold = function(threshold) {};

/**
	@constructor
	@implements Ammo.btGeneric6DofConstraint
	@param {Ammo.btRigidBody} rbA
	@param {Ammo.btRigidBody} rbB
	@param {Ammo.btTransform} [frameInA]
	@param {Ammo.btTransform} [frameInB]
	@param {Boolean} [useLinearFrameReferenceFrameA]
*/
Ammo.btGeneric6DofSpringConstraint = function(rbA, rbB, frameInA, frameInB, useLinearFrameReferenceFrameA) {};
/**
	@function
	@param {Number} index
	@param {Boolean} onOff
*/
Ammo.btGeneric6DofSpringConstraint.prototype.enableSpring = function(index, onOff) {};
/**
	@function
	@param {Number} index
	@param {Number} stiffness
*/
Ammo.btGeneric6DofSpringConstraint.prototype.setStiffness = function(index, stiffness) {};
/**
	@function
	@param {Number} index
	@param {Number} damping
*/
Ammo.btGeneric6DofSpringConstraint.prototype.setDamping = function(index, damping) {};
/**
	@constructor
	@implements Ammo.btGeneric6DofConstraint
	@param {Ammo.btRigidBody} rbA
	@param {Ammo.btRigidBody} rbB
	@param {Ammo.btTransform} [frameInA]
	@param {Ammo.btTransform} [frameInB]
	@param {Boolean} [useLinearFrameReferenceFrameA]
*/
Ammo.btGeneric6DofSpringConstraint = function(rbA, rbB, frameInA, frameInB, useLinearFrameReferenceFrameA) {};
/**
	@function
	@param {Ammo.btVector3} linearLower
*/
Ammo.btGeneric6DofSpringConstraint.prototype.setLinearLowerLimit = function(linearLower) {};
/**
	@function
	@param {Ammo.btVector3} linearUpper
*/
Ammo.btGeneric6DofSpringConstraint.prototype.setLinearUpperLimit = function(linearUpper) {};
/**
	@function
	@param {Ammo.btVector3} angularLower
*/
Ammo.btGeneric6DofSpringConstraint.prototype.setAngularLowerLimit = function(angularLower) {};
/**
	@function
	@param {Ammo.btVector3} angularUpper
*/
Ammo.btGeneric6DofSpringConstraint.prototype.setAngularUpperLimit = function(angularUpper) {};
/**
	@function
	@param {Boolean} needsFeedback
*/
Ammo.btGeneric6DofSpringConstraint.prototype.enableFeedback = function(needsFeedback) {};
/**
	@function
	@return {Number}
*/
Ammo.btGeneric6DofSpringConstraint.prototype.getBreakingImpulseThreshold = function() {
	return 0;
};
/**
	@function
	@param {Number} threshold
*/
Ammo.btGeneric6DofSpringConstraint.prototype.setBreakingImpulseThreshold = function(threshold) {};

/**
	@constructor
*/
Ammo.btSequentialImpulseConstraintSolver = function() {};

/**
	@constructor
	@implements Ammo.btTypedConstraint
	@param {Ammo.btRigidBody} rbA
	@param {Ammo.btRigidBody} [rbB]
	@param {Ammo.btTransform} [rbAFrame]
	@param {Ammo.btTransform} [rbBFrame]
*/
Ammo.btConeTwistConstraint = function(rbA, rbB, rbAFrame, rbBFrame) {};
/**
	@function
	@param {Number} limitIndex
	@param {Number} limitValue
*/
Ammo.btConeTwistConstraint.prototype.setLimit = function(limitIndex, limitValue) {};
/**
	@function
	@param {Boolean} angularOnly
*/
Ammo.btConeTwistConstraint.prototype.setAngularOnly = function(angularOnly) {};
/**
	@function
	@param {Number} damping
*/
Ammo.btConeTwistConstraint.prototype.setDamping = function(damping) {};
/**
	@function
	@param {Boolean} b
*/
Ammo.btConeTwistConstraint.prototype.enableMotor = function(b) {};
/**
	@function
	@param {Number} maxMotorImpulse
*/
Ammo.btConeTwistConstraint.prototype.setMaxMotorImpulse = function(maxMotorImpulse) {};
/**
	@function
	@param {Number} maxMotorImpulse
*/
Ammo.btConeTwistConstraint.prototype.setMaxMotorImpulseNormalized = function(maxMotorImpulse) {};
/**
	@function
	@param {Ammo.btQuaternion} q
*/
Ammo.btConeTwistConstraint.prototype.setMotorTarget = function(q) {};
/**
	@function
	@param {Ammo.btQuaternion} q
*/
Ammo.btConeTwistConstraint.prototype.setMotorTargetInConstraintSpace = function(q) {};
/**
	@function
	@param {Boolean} needsFeedback
*/
Ammo.btConeTwistConstraint.prototype.enableFeedback = function(needsFeedback) {};
/**
	@function
	@return {Number}
*/
Ammo.btConeTwistConstraint.prototype.getBreakingImpulseThreshold = function() {
	return 0;
};
/**
	@function
	@param {Number} threshold
*/
Ammo.btConeTwistConstraint.prototype.setBreakingImpulseThreshold = function(threshold) {};

/**
	@constructor
	@implements Ammo.btTypedConstraint
	@param {Ammo.btRigidBody} rbA
	@param {Ammo.btRigidBody} rbB
	@param {Ammo.btVector3} [pivotInA]
	@param {Ammo.btVector3} [pivotInB]
	@param {Ammo.btVector3} [axisInA]
	@param {Ammo.btVector3} [axisInB]
	@param {Boolean} [useReferenceFrameA]
*/
Ammo.btHingeConstraint = function(rbA, rbB, pivotInA, pivotInB, axisInA, axisInB, useReferenceFrameA) {};
/**
	@constructor
	@implements Ammo.btTypedConstraint
	@param {Ammo.btRigidBody} rbA
	@param {Ammo.btTransform} rbAFrame
	@param {Boolean} [useReferenceFrameA]
*/
Ammo.btHingeConstraint = function(rbA, rbAFrame, useReferenceFrameA) {};
/**
	@function
	@param {Boolean} enableMotor
	@param {Number} targetVelocity
	@param {Number} maxMotorImpulse
*/
Ammo.btHingeConstraint.prototype.enableAngularMotor = function(enableMotor, targetVelocity, maxMotorImpulse) {};
/**
	@function
	@param {Boolean} angularOnly
*/
Ammo.btHingeConstraint.prototype.setAngularOnly = function(angularOnly) {};
/**
	@function
	@param {Boolean} enableMotor
*/
Ammo.btHingeConstraint.prototype.enableMotor = function(enableMotor) {};
/**
	@function
	@param {Number} maxMotorImpulse
*/
Ammo.btHingeConstraint.prototype.setMaxMotorImpulse = function(maxMotorImpulse) {};
/**
	@function
	@param {Number} targetAngle
	@param {Number} dt
*/
Ammo.btHingeConstraint.prototype.setMotorTarget = function(targetAngle, dt) {};
/**
	@function
	@param {Boolean} needsFeedback
*/
Ammo.btHingeConstraint.prototype.enableFeedback = function(needsFeedback) {};
/**
	@function
	@return {Number}
*/
Ammo.btHingeConstraint.prototype.getBreakingImpulseThreshold = function() {
	return 0;
};
/**
	@function
	@param {Number} threshold
*/
Ammo.btHingeConstraint.prototype.setBreakingImpulseThreshold = function(threshold) {};

/**
	@constructor
	@implements Ammo.btTypedConstraint
	@param {Ammo.btRigidBody} rbA
	@param {Ammo.btRigidBody} rbB
	@param {Ammo.btTransform} [frameInA]
	@param {Ammo.btTransform} [frameInB]
	@param {Boolean} [useLinearReferenceFrameA]
*/
Ammo.btSliderConstraint = function(rbA, rbB, frameInA, frameInB, useLinearReferenceFrameA) {};
/**
	@function
	@param {Number} lowerLimit
*/
Ammo.btSliderConstraint.prototype.setLowerLinLimit = function(lowerLimit) {};
/**
	@function
	@param {Number} upperLimit
*/
Ammo.btSliderConstraint.prototype.setUpperLinLimit = function(upperLimit) {};
/**
	@function
	@param {Number} lowerAngLimit
*/
Ammo.btSliderConstraint.prototype.setLowerAngLimit = function(lowerAngLimit) {};
/**
	@function
	@param {Number} upperAngLimit
*/
Ammo.btSliderConstraint.prototype.setUpperAngLimit = function(upperAngLimit) {};
/**
	@function
	@param {Boolean} needsFeedback
*/
Ammo.btSliderConstraint.prototype.enableFeedback = function(needsFeedback) {};
/**
	@function
	@return {Number}
*/
Ammo.btSliderConstraint.prototype.getBreakingImpulseThreshold = function() {
	return 0;
};
/**
	@function
	@param {Number} threshold
*/
Ammo.btSliderConstraint.prototype.setBreakingImpulseThreshold = function(threshold) {};


/**
	@function
	@return {Number}
*/
Ammo.btDispatcherInfo.prototype.get_m_timeStep = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btDispatcherInfo.prototype.set_m_timeStep = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btDispatcherInfo.prototype.get_m_stepCount = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btDispatcherInfo.prototype.set_m_stepCount = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btDispatcherInfo.prototype.get_m_dispatchFunc = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btDispatcherInfo.prototype.set_m_dispatchFunc = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btDispatcherInfo.prototype.get_m_timeOfImpact = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btDispatcherInfo.prototype.set_m_timeOfImpact = function(value) {};
/**
	@function
	@return {Boolean}
*/
Ammo.btDispatcherInfo.prototype.get_m_useContinuous = function() {
	return false;
};
/**
	@function
	@param {Boolean} value
*/
Ammo.btDispatcherInfo.prototype.set_m_useContinuous = function(value) {};
/**
	@function
	@return {Boolean}
*/
Ammo.btDispatcherInfo.prototype.get_m_enableSatConvex = function() {
	return false;
};
/**
	@function
	@param {Boolean} value
*/
Ammo.btDispatcherInfo.prototype.set_m_enableSatConvex = function(value) {};
/**
	@function
	@return {Boolean}
*/
Ammo.btDispatcherInfo.prototype.get_m_enableSPU = function() {
	return false;
};
/**
	@function
	@param {Boolean} value
*/
Ammo.btDispatcherInfo.prototype.set_m_enableSPU = function(value) {};
/**
	@function
	@return {Boolean}
*/
Ammo.btDispatcherInfo.prototype.get_m_useEpa = function() {
	return false;
};
/**
	@function
	@param {Boolean} value
*/
Ammo.btDispatcherInfo.prototype.set_m_useEpa = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btDispatcherInfo.prototype.get_m_allowedCcdPenetration = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btDispatcherInfo.prototype.set_m_allowedCcdPenetration = function(value) {};
/**
	@function
	@return {Boolean}
*/
Ammo.btDispatcherInfo.prototype.get_m_useConvexConservativeDistanceUtil = function() {
	return false;
};
/**
	@function
	@param {Boolean} value
*/
Ammo.btDispatcherInfo.prototype.set_m_useConvexConservativeDistanceUtil = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btDispatcherInfo.prototype.get_m_convexConservativeDistanceThreshold = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btDispatcherInfo.prototype.set_m_convexConservativeDistanceThreshold = function(value) {};

/**
	@function
	@return {Ammo.btDispatcher}
*/
Ammo.btCollisionWorld.prototype.getDispatcher = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} rayFromWorld
	@param {Ammo.btVector3} rayToWorld
	@param {Ammo.RayResultCallback} resultCallback
*/
Ammo.btCollisionWorld.prototype.rayTest = function(rayFromWorld, rayToWorld, resultCallback) {};
/**
	@function
	@return {Ammo.btOverlappingPairCache}
*/
Ammo.btCollisionWorld.prototype.getPairCache = function() {
	return null;
};
/**
	@function
	@return {Ammo.btDispatcherInfo}
*/
Ammo.btCollisionWorld.prototype.getDispatchInfo = function() {
	return null;
};
/**
	@function
	@param {Ammo.btCollisionObject} collisionObject
	@param {Number} [collisionFilterGroup]
	@param {Number} [collisionFilterMask]
*/
Ammo.btCollisionWorld.prototype.addCollisionObject = function(collisionObject, collisionFilterGroup, collisionFilterMask) {};
/**
	@function
	@return {Ammo.btBroadphaseInterface}
*/
Ammo.btCollisionWorld.prototype.getBroadphase = function() {
	return null;
};
/**
	@function
	@param {Ammo.btConvexShape} castShape
	@param {Ammo.btTransform} from
	@param {Ammo.btTransform} to
	@param {Ammo.ConvexResultCallback} resultCallback
	@param {Number} allowedCcdPenetration
*/
Ammo.btCollisionWorld.prototype.convexSweepTest = function(castShape, from, to, resultCallback, allowedCcdPenetration) {};
/**
	@function
	@param {Ammo.btCollisionObject} colObjA
	@param {Ammo.btCollisionObject} colObjB
	@param {Ammo.ContactResultCallback} resultCallback
*/
Ammo.btCollisionWorld.prototype.contactPairTest = function(colObjA, colObjB, resultCallback) {};
/**
	@function
	@param {Ammo.btCollisionObject} colObj
	@param {Ammo.ContactResultCallback} resultCallback
*/
Ammo.btCollisionWorld.prototype.contactTest = function(colObj, resultCallback) {};

/**
	@function
	@return {Boolean}
*/
Ammo.btContactSolverInfo.prototype.get_m_splitImpulse = function() {
	return false;
};
/**
	@function
	@param {Boolean} value
*/
Ammo.btContactSolverInfo.prototype.set_m_splitImpulse = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btContactSolverInfo.prototype.get_m_splitImpulsePenetrationThreshold = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btContactSolverInfo.prototype.set_m_splitImpulsePenetrationThreshold = function(value) {};

/**
	@function
	@param {Ammo.btActionInterface} action
*/
Ammo.btDynamicsWorld.prototype.addAction = function(action) {};
/**
	@function
	@param {Ammo.btActionInterface} action
*/
Ammo.btDynamicsWorld.prototype.removeAction = function(action) {};
/**
	@function
	@return {Ammo.btContactSolverInfo}
*/
Ammo.btDynamicsWorld.prototype.getSolverInfo = function() {
	return null;
};
/**
	@function
	@return {Ammo.btDispatcher}
*/
Ammo.btDynamicsWorld.prototype.getDispatcher = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} rayFromWorld
	@param {Ammo.btVector3} rayToWorld
	@param {Ammo.RayResultCallback} resultCallback
*/
Ammo.btDynamicsWorld.prototype.rayTest = function(rayFromWorld, rayToWorld, resultCallback) {};
/**
	@function
	@return {Ammo.btOverlappingPairCache}
*/
Ammo.btDynamicsWorld.prototype.getPairCache = function() {
	return null;
};
/**
	@function
	@return {Ammo.btDispatcherInfo}
*/
Ammo.btDynamicsWorld.prototype.getDispatchInfo = function() {
	return null;
};
/**
	@function
	@param {Ammo.btCollisionObject} collisionObject
	@param {Number} [collisionFilterGroup]
	@param {Number} [collisionFilterMask]
*/
Ammo.btDynamicsWorld.prototype.addCollisionObject = function(collisionObject, collisionFilterGroup, collisionFilterMask) {};
/**
	@function
	@return {Ammo.btBroadphaseInterface}
*/
Ammo.btDynamicsWorld.prototype.getBroadphase = function() {
	return null;
};
/**
	@function
	@param {Ammo.btConvexShape} castShape
	@param {Ammo.btTransform} from
	@param {Ammo.btTransform} to
	@param {Ammo.ConvexResultCallback} resultCallback
	@param {Number} allowedCcdPenetration
*/
Ammo.btDynamicsWorld.prototype.convexSweepTest = function(castShape, from, to, resultCallback, allowedCcdPenetration) {};
/**
	@function
	@param {Ammo.btCollisionObject} colObjA
	@param {Ammo.btCollisionObject} colObjB
	@param {Ammo.ContactResultCallback} resultCallback
*/
Ammo.btDynamicsWorld.prototype.contactPairTest = function(colObjA, colObjB, resultCallback) {};
/**
	@function
	@param {Ammo.btCollisionObject} colObj
	@param {Ammo.ContactResultCallback} resultCallback
*/
Ammo.btDynamicsWorld.prototype.contactTest = function(colObj, resultCallback) {};

/**
	@constructor
	@implements Ammo.btDynamicsWorld
	@param {Ammo.btDispatcher} dispatcher
	@param {Ammo.btBroadphaseInterface} pairCache
	@param {Ammo.btConstraintSolver} constraintSolver
	@param {Ammo.btCollisionConfiguration} collisionConfiguration
*/
Ammo.btDiscreteDynamicsWorld = function(dispatcher, pairCache, constraintSolver, collisionConfiguration) {};
/**
	@function
	@param {Ammo.btVector3} gravity
*/
Ammo.btDiscreteDynamicsWorld.prototype.setGravity = function(gravity) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btDiscreteDynamicsWorld.prototype.getGravity = function() {
	return null;
};
/**
	@function
	@param {Ammo.btRigidBody} [body]
	@param {Number} [group]
	@param {Number} [mask]
*/
Ammo.btDiscreteDynamicsWorld.prototype.addRigidBody = function(body, group, mask) {};
/**
	@function
	@param {Ammo.btRigidBody} body
*/
Ammo.btDiscreteDynamicsWorld.prototype.removeRigidBody = function(body) {};
/**
	@function
	@param {Ammo.btTypedConstraint} constraint
	@param {Boolean} [disableCollisionsBetweenLinkedBodies]
*/
Ammo.btDiscreteDynamicsWorld.prototype.addConstraint = function(constraint, disableCollisionsBetweenLinkedBodies) {};
/**
	@function
	@param {Ammo.btTypedConstraint} constraint
*/
Ammo.btDiscreteDynamicsWorld.prototype.removeConstraint = function(constraint) {};
/**
	@function
	@param {Number} timeStep
	@param {Number} [maxSubSteps]
	@param {Number} [fixedTimeStep]
	@return {Number}
*/
Ammo.btDiscreteDynamicsWorld.prototype.stepSimulation = function(timeStep, maxSubSteps, fixedTimeStep) {
	return 0;
};
/**
	@function
	@param {Ammo.btActionInterface} action
*/
Ammo.btDiscreteDynamicsWorld.prototype.addAction = function(action) {};
/**
	@function
	@param {Ammo.btActionInterface} action
*/
Ammo.btDiscreteDynamicsWorld.prototype.removeAction = function(action) {};
/**
	@function
	@return {Ammo.btContactSolverInfo}
*/
Ammo.btDiscreteDynamicsWorld.prototype.getSolverInfo = function() {
	return null;
};
/**
	@function
	@return {Ammo.btDispatcher}
*/
Ammo.btDiscreteDynamicsWorld.prototype.getDispatcher = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} rayFromWorld
	@param {Ammo.btVector3} rayToWorld
	@param {Ammo.RayResultCallback} resultCallback
*/
Ammo.btDiscreteDynamicsWorld.prototype.rayTest = function(rayFromWorld, rayToWorld, resultCallback) {};
/**
	@function
	@return {Ammo.btOverlappingPairCache}
*/
Ammo.btDiscreteDynamicsWorld.prototype.getPairCache = function() {
	return null;
};
/**
	@function
	@return {Ammo.btDispatcherInfo}
*/
Ammo.btDiscreteDynamicsWorld.prototype.getDispatchInfo = function() {
	return null;
};
/**
	@function
	@param {Ammo.btCollisionObject} collisionObject
	@param {Number} [collisionFilterGroup]
	@param {Number} [collisionFilterMask]
*/
Ammo.btDiscreteDynamicsWorld.prototype.addCollisionObject = function(collisionObject, collisionFilterGroup, collisionFilterMask) {};
/**
	@function
	@return {Ammo.btBroadphaseInterface}
*/
Ammo.btDiscreteDynamicsWorld.prototype.getBroadphase = function() {
	return null;
};
/**
	@function
	@param {Ammo.btConvexShape} castShape
	@param {Ammo.btTransform} from
	@param {Ammo.btTransform} to
	@param {Ammo.ConvexResultCallback} resultCallback
	@param {Number} allowedCcdPenetration
*/
Ammo.btDiscreteDynamicsWorld.prototype.convexSweepTest = function(castShape, from, to, resultCallback, allowedCcdPenetration) {};
/**
	@function
	@param {Ammo.btCollisionObject} colObjA
	@param {Ammo.btCollisionObject} colObjB
	@param {Ammo.ContactResultCallback} resultCallback
*/
Ammo.btDiscreteDynamicsWorld.prototype.contactPairTest = function(colObjA, colObjB, resultCallback) {};
/**
	@function
	@param {Ammo.btCollisionObject} colObj
	@param {Ammo.ContactResultCallback} resultCallback
*/
Ammo.btDiscreteDynamicsWorld.prototype.contactTest = function(colObj, resultCallback) {};

/**
	@constructor
*/
Ammo.btVehicleTuning = function() {};
/**
	@function
	@return {Number}
*/
Ammo.btVehicleTuning.prototype.get_m_suspensionStiffness = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btVehicleTuning.prototype.set_m_suspensionStiffness = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btVehicleTuning.prototype.get_m_suspensionCompression = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btVehicleTuning.prototype.set_m_suspensionCompression = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btVehicleTuning.prototype.get_m_suspensionDamping = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btVehicleTuning.prototype.set_m_suspensionDamping = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btVehicleTuning.prototype.get_m_maxSuspensionTravelCm = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btVehicleTuning.prototype.set_m_maxSuspensionTravelCm = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btVehicleTuning.prototype.get_m_frictionSlip = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btVehicleTuning.prototype.set_m_frictionSlip = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btVehicleTuning.prototype.get_m_maxSuspensionForce = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btVehicleTuning.prototype.set_m_maxSuspensionForce = function(value) {};

/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btVehicleRaycasterResult.prototype.get_m_hitPointInWorld = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.btVehicleRaycasterResult.prototype.set_m_hitPointInWorld = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btVehicleRaycasterResult.prototype.get_m_hitNormalInWorld = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.btVehicleRaycasterResult.prototype.set_m_hitNormalInWorld = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btVehicleRaycasterResult.prototype.get_m_distFraction = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btVehicleRaycasterResult.prototype.set_m_distFraction = function(value) {};

/**
	@function
	@param {Ammo.btVector3} from
	@param {Ammo.btVector3} to
	@param {Ammo.btVehicleRaycasterResult} result
*/
Ammo.btVehicleRaycaster.prototype.castRay = function(from, to, result) {};

/**
	@constructor
	@implements Ammo.btVehicleRaycaster
	@param {Ammo.btDynamicsWorld} world
*/
Ammo.btDefaultVehicleRaycaster = function(world) {};
/**
	@function
	@param {Ammo.btVector3} from
	@param {Ammo.btVector3} to
	@param {Ammo.btVehicleRaycasterResult} result
*/
Ammo.btDefaultVehicleRaycaster.prototype.castRay = function(from, to, result) {};

/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.RaycastInfo.prototype.get_m_contactNormalWS = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.RaycastInfo.prototype.set_m_contactNormalWS = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.RaycastInfo.prototype.get_m_contactPointWS = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.RaycastInfo.prototype.set_m_contactPointWS = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.RaycastInfo.prototype.get_m_suspensionLength = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.RaycastInfo.prototype.set_m_suspensionLength = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.RaycastInfo.prototype.get_m_hardPointWS = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.RaycastInfo.prototype.set_m_hardPointWS = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.RaycastInfo.prototype.get_m_wheelDirectionWS = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.RaycastInfo.prototype.set_m_wheelDirectionWS = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.RaycastInfo.prototype.get_m_wheelAxleWS = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.RaycastInfo.prototype.set_m_wheelAxleWS = function(value) {};
/**
	@function
	@return {Boolean}
*/
Ammo.RaycastInfo.prototype.get_m_isInContact = function() {
	return false;
};
/**
	@function
	@param {Boolean} value
*/
Ammo.RaycastInfo.prototype.set_m_isInContact = function(value) {};
/**
	@function
	@return {*}
*/
Ammo.RaycastInfo.prototype.get_m_groundObject = function() {
	return null;
};
/**
	@function
	@param {*} value
*/
Ammo.RaycastInfo.prototype.set_m_groundObject = function(value) {};

/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btWheelInfoConstructionInfo.prototype.get_m_chassisConnectionCS = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.btWheelInfoConstructionInfo.prototype.set_m_chassisConnectionCS = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btWheelInfoConstructionInfo.prototype.get_m_wheelDirectionCS = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.btWheelInfoConstructionInfo.prototype.set_m_wheelDirectionCS = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btWheelInfoConstructionInfo.prototype.get_m_wheelAxleCS = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.btWheelInfoConstructionInfo.prototype.set_m_wheelAxleCS = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfoConstructionInfo.prototype.get_m_suspensionRestLength = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfoConstructionInfo.prototype.set_m_suspensionRestLength = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfoConstructionInfo.prototype.get_m_maxSuspensionTravelCm = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfoConstructionInfo.prototype.set_m_maxSuspensionTravelCm = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfoConstructionInfo.prototype.get_m_wheelRadius = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfoConstructionInfo.prototype.set_m_wheelRadius = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfoConstructionInfo.prototype.get_m_suspensionStiffness = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfoConstructionInfo.prototype.set_m_suspensionStiffness = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfoConstructionInfo.prototype.get_m_wheelsDampingCompression = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfoConstructionInfo.prototype.set_m_wheelsDampingCompression = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfoConstructionInfo.prototype.get_m_wheelsDampingRelaxation = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfoConstructionInfo.prototype.set_m_wheelsDampingRelaxation = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfoConstructionInfo.prototype.get_m_frictionSlip = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfoConstructionInfo.prototype.set_m_frictionSlip = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfoConstructionInfo.prototype.get_m_maxSuspensionForce = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfoConstructionInfo.prototype.set_m_maxSuspensionForce = function(value) {};
/**
	@function
	@return {Boolean}
*/
Ammo.btWheelInfoConstructionInfo.prototype.get_m_bIsFrontWheel = function() {
	return false;
};
/**
	@function
	@param {Boolean} value
*/
Ammo.btWheelInfoConstructionInfo.prototype.set_m_bIsFrontWheel = function(value) {};

/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_suspensionStiffness = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_suspensionStiffness = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_frictionSlip = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_frictionSlip = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_engineForce = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_engineForce = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_rollInfluence = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_rollInfluence = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_suspensionRestLength1 = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_suspensionRestLength1 = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_wheelsRadius = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_wheelsRadius = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_wheelsDampingCompression = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_wheelsDampingCompression = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_wheelsDampingRelaxation = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_wheelsDampingRelaxation = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_steering = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_steering = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_maxSuspensionForce = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_maxSuspensionForce = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_maxSuspensionTravelCm = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_maxSuspensionTravelCm = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_wheelsSuspensionForce = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_wheelsSuspensionForce = function(value) {};
/**
	@function
	@return {Boolean}
*/
Ammo.btWheelInfo.prototype.get_m_bIsFrontWheel = function() {
	return false;
};
/**
	@function
	@param {Boolean} value
*/
Ammo.btWheelInfo.prototype.set_m_bIsFrontWheel = function(value) {};
/**
	@function
	@return {Ammo.RaycastInfo}
*/
Ammo.btWheelInfo.prototype.get_m_raycastInfo = function() {
	return null;
};
/**
	@function
	@param {Ammo.RaycastInfo} value
*/
Ammo.btWheelInfo.prototype.set_m_raycastInfo = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btWheelInfo.prototype.get_m_chassisConnectionPointCS = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.btWheelInfo.prototype.set_m_chassisConnectionPointCS = function(value) {};
/**
	@constructor
	@param {Ammo.btWheelInfoConstructionInfo} ci
*/
Ammo.btWheelInfo = function(ci) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.getSuspensionRestLength = function() {
	return 0;
};
/**
	@function
	@param {Ammo.btRigidBody} chassis
	@param {Ammo.RaycastInfo} raycastInfo
*/
Ammo.btWheelInfo.prototype.updateWheel = function(chassis, raycastInfo) {};
/**
	@function
	@return {Ammo.btTransform}
*/
Ammo.btWheelInfo.prototype.get_m_worldTransform = function() {
	return null;
};
/**
	@function
	@param {Ammo.btTransform} value
*/
Ammo.btWheelInfo.prototype.set_m_worldTransform = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btWheelInfo.prototype.get_m_wheelDirectionCS = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.btWheelInfo.prototype.set_m_wheelDirectionCS = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btWheelInfo.prototype.get_m_wheelAxleCS = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.btWheelInfo.prototype.set_m_wheelAxleCS = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_rotation = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_rotation = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_deltaRotation = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_deltaRotation = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_brake = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_brake = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_clippedInvContactDotSuspension = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_clippedInvContactDotSuspension = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_suspensionRelativeVelocity = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_suspensionRelativeVelocity = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btWheelInfo.prototype.get_m_skidInfo = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btWheelInfo.prototype.set_m_skidInfo = function(value) {};

/**
	@function
	@param {Ammo.btCollisionWorld} collisionWorld
	@param {Number} deltaTimeStep
*/
Ammo.btActionInterface.prototype.updateAction = function(collisionWorld, deltaTimeStep) {};

/**
	@constructor
	@implements Ammo.btActionInterface
	@param {Ammo.btPairCachingGhostObject} ghostObject
	@param {Ammo.btConvexShape} convexShape
	@param {Number} stepHeight
	@param {Number} [upAxis]
*/
Ammo.btKinematicCharacterController = function(ghostObject, convexShape, stepHeight, upAxis) {};
/**
	@function
	@param {Number} axis
*/
Ammo.btKinematicCharacterController.prototype.setUpAxis = function(axis) {};
/**
	@function
	@param {Ammo.btVector3} walkDirection
*/
Ammo.btKinematicCharacterController.prototype.setWalkDirection = function(walkDirection) {};
/**
	@function
	@param {Ammo.btVector3} velocity
	@param {Number} timeInterval
*/
Ammo.btKinematicCharacterController.prototype.setVelocityForTimeInterval = function(velocity, timeInterval) {};
/**
	@function
	@param {Ammo.btVector3} origin
*/
Ammo.btKinematicCharacterController.prototype.warp = function(origin) {};
/**
	@function
	@param {Ammo.btCollisionWorld} collisionWorld
*/
Ammo.btKinematicCharacterController.prototype.preStep = function(collisionWorld) {};
/**
	@function
	@param {Ammo.btCollisionWorld} collisionWorld
	@param {Number} dt
*/
Ammo.btKinematicCharacterController.prototype.playerStep = function(collisionWorld, dt) {};
/**
	@function
	@param {Number} fallSpeed
*/
Ammo.btKinematicCharacterController.prototype.setFallSpeed = function(fallSpeed) {};
/**
	@function
	@param {Number} jumpSpeed
*/
Ammo.btKinematicCharacterController.prototype.setJumpSpeed = function(jumpSpeed) {};
/**
	@function
	@param {Number} maxJumpHeight
*/
Ammo.btKinematicCharacterController.prototype.setMaxJumpHeight = function(maxJumpHeight) {};
/**
	@function
	@return {Boolean}
*/
Ammo.btKinematicCharacterController.prototype.canJump = function() {
	return false;
};
/**
	@function
*/
Ammo.btKinematicCharacterController.prototype.jump = function() {};
/**
	@function
	@param {Number} gravity
*/
Ammo.btKinematicCharacterController.prototype.setGravity = function(gravity) {};
/**
	@function
	@return {Number}
*/
Ammo.btKinematicCharacterController.prototype.getGravity = function() {
	return 0;
};
/**
	@function
	@param {Number} slopeRadians
*/
Ammo.btKinematicCharacterController.prototype.setMaxSlope = function(slopeRadians) {};
/**
	@function
	@return {Number}
*/
Ammo.btKinematicCharacterController.prototype.getMaxSlope = function() {
	return 0;
};
/**
	@function
	@return {Ammo.btPairCachingGhostObject}
*/
Ammo.btKinematicCharacterController.prototype.getGhostObject = function() {
	return null;
};
/**
	@function
	@param {Boolean} useGhostObjectSweepTest
*/
Ammo.btKinematicCharacterController.prototype.setUseGhostSweepTest = function(useGhostObjectSweepTest) {};
/**
	@function
	@return {Boolean}
*/
Ammo.btKinematicCharacterController.prototype.onGround = function() {
	return false;
};
/**
	@function
	@param {Ammo.btCollisionWorld} collisionWorld
	@param {Number} deltaTimeStep
*/
Ammo.btKinematicCharacterController.prototype.updateAction = function(collisionWorld, deltaTimeStep) {};

/**
	@constructor
	@implements Ammo.btActionInterface
	@param {Ammo.btVehicleTuning} tuning
	@param {Ammo.btRigidBody} chassis
	@param {Ammo.btVehicleRaycaster} raycaster
*/
Ammo.btRaycastVehicle = function(tuning, chassis, raycaster) {};
/**
	@function
	@param {Number} force
	@param {Number} wheel
*/
Ammo.btRaycastVehicle.prototype.applyEngineForce = function(force, wheel) {};
/**
	@function
	@param {Number} steering
	@param {Number} wheel
*/
Ammo.btRaycastVehicle.prototype.setSteeringValue = function(steering, wheel) {};
/**
	@function
	@param {Number} wheelIndex
	@return {Ammo.btTransform}
*/
Ammo.btRaycastVehicle.prototype.getWheelTransformWS = function(wheelIndex) {
	return null;
};
/**
	@function
	@param {Number} wheelIndex
	@param {Boolean} interpolatedTransform
*/
Ammo.btRaycastVehicle.prototype.updateWheelTransform = function(wheelIndex, interpolatedTransform) {};
/**
	@function
	@param {Ammo.btVector3} connectionPointCS0
	@param {Ammo.btVector3} wheelDirectionCS0
	@param {Ammo.btVector3} wheelAxleCS
	@param {Number} suspensionRestLength
	@param {Number} wheelRadius
	@param {Ammo.btVehicleTuning} tuning
	@param {Boolean} isFrontWheel
	@return {Ammo.btWheelInfo}
*/
Ammo.btRaycastVehicle.prototype.addWheel = function(connectionPointCS0, wheelDirectionCS0, wheelAxleCS, suspensionRestLength, wheelRadius, tuning, isFrontWheel) {
	return null;
};
/**
	@function
	@return {Number}
*/
Ammo.btRaycastVehicle.prototype.getNumWheels = function() {
	return 0;
};
/**
	@function
	@return {Ammo.btRigidBody}
*/
Ammo.btRaycastVehicle.prototype.getRigidBody = function() {
	return null;
};
/**
	@function
	@param {Number} index
	@return {Ammo.btWheelInfo}
*/
Ammo.btRaycastVehicle.prototype.getWheelInfo = function(index) {
	return null;
};
/**
	@function
	@param {Number} brake
	@param {Number} wheelIndex
*/
Ammo.btRaycastVehicle.prototype.setBrake = function(brake, wheelIndex) {};
/**
	@function
	@param {Number} rightIndex
	@param {Number} upIndex
	@param {Number} forwardIndex
*/
Ammo.btRaycastVehicle.prototype.setCoordinateSystem = function(rightIndex, upIndex, forwardIndex) {};
/**
	@function
	@return {Number}
*/
Ammo.btRaycastVehicle.prototype.getCurrentSpeedKmHour = function() {
	return 0;
};
/**
	@function
	@return {Ammo.btTransform}
*/
Ammo.btRaycastVehicle.prototype.getChassisWorldTransform = function() {
	return null;
};
/**
	@function
	@param {Ammo.btWheelInfo} wheel
	@return {Number}
*/
Ammo.btRaycastVehicle.prototype.rayCast = function(wheel) {
	return 0;
};
/**
	@function
	@param {Number} step
*/
Ammo.btRaycastVehicle.prototype.updateVehicle = function(step) {};
/**
	@function
*/
Ammo.btRaycastVehicle.prototype.resetSuspension = function() {};
/**
	@function
	@param {Number} wheel
	@return {Number}
*/
Ammo.btRaycastVehicle.prototype.getSteeringValue = function(wheel) {
	return 0;
};
/**
	@function
	@param {Ammo.btWheelInfo} wheel
	@param {Boolean} [interpolatedTransform]
*/
Ammo.btRaycastVehicle.prototype.updateWheelTransformsWS = function(wheel, interpolatedTransform) {};
/**
	@function
	@param {Number} pitch
*/
Ammo.btRaycastVehicle.prototype.setPitchControl = function(pitch) {};
/**
	@function
	@param {Number} deltaTime
*/
Ammo.btRaycastVehicle.prototype.updateSuspension = function(deltaTime) {};
/**
	@function
	@param {Number} timeStep
*/
Ammo.btRaycastVehicle.prototype.updateFriction = function(timeStep) {};
/**
	@function
	@return {Number}
*/
Ammo.btRaycastVehicle.prototype.getRightAxis = function() {
	return 0;
};
/**
	@function
	@return {Number}
*/
Ammo.btRaycastVehicle.prototype.getUpAxis = function() {
	return 0;
};
/**
	@function
	@return {Number}
*/
Ammo.btRaycastVehicle.prototype.getForwardAxis = function() {
	return 0;
};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btRaycastVehicle.prototype.getForwardVector = function() {
	return null;
};
/**
	@function
	@return {Number}
*/
Ammo.btRaycastVehicle.prototype.getUserConstraintType = function() {
	return 0;
};
/**
	@function
	@param {Number} userConstraintType
*/
Ammo.btRaycastVehicle.prototype.setUserConstraintType = function(userConstraintType) {};
/**
	@function
	@param {Number} uid
*/
Ammo.btRaycastVehicle.prototype.setUserConstraintId = function(uid) {};
/**
	@function
	@return {Number}
*/
Ammo.btRaycastVehicle.prototype.getUserConstraintId = function() {
	return 0;
};
/**
	@function
	@param {Ammo.btCollisionWorld} collisionWorld
	@param {Number} deltaTimeStep
*/
Ammo.btRaycastVehicle.prototype.updateAction = function(collisionWorld, deltaTimeStep) {};

/**
	@constructor
	@implements Ammo.btCollisionObject
*/
Ammo.btGhostObject = function() {};
/**
	@function
	@return {Number}
*/
Ammo.btGhostObject.prototype.getNumOverlappingObjects = function() {
	return 0;
};
/**
	@function
	@param {Number} index
	@return {Ammo.btCollisionObject}
*/
Ammo.btGhostObject.prototype.getOverlappingObject = function(index) {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} anisotropicFriction
	@param {Number} frictionMode
*/
Ammo.btGhostObject.prototype.setAnisotropicFriction = function(anisotropicFriction, frictionMode) {};
/**
	@function
	@return {Ammo.btCollisionShape}
*/
Ammo.btGhostObject.prototype.getCollisionShape = function() {
	return null;
};
/**
	@function
	@param {Number} contactProcessingThreshold
*/
Ammo.btGhostObject.prototype.setContactProcessingThreshold = function(contactProcessingThreshold) {};
/**
	@function
	@param {Number} newState
*/
Ammo.btGhostObject.prototype.setActivationState = function(newState) {};
/**
	@function
	@param {Number} newState
*/
Ammo.btGhostObject.prototype.forceActivationState = function(newState) {};
/**
	@function
	@param {Boolean} [forceActivation]
*/
Ammo.btGhostObject.prototype.activate = function(forceActivation) {};
/**
	@function
	@return {Boolean}
*/
Ammo.btGhostObject.prototype.isActive = function() {
	return false;
};
/**
	@function
	@return {Boolean}
*/
Ammo.btGhostObject.prototype.isKinematicObject = function() {
	return false;
};
/**
	@function
	@param {Number} rest
*/
Ammo.btGhostObject.prototype.setRestitution = function(rest) {};
/**
	@function
	@param {Number} frict
*/
Ammo.btGhostObject.prototype.setFriction = function(frict) {};
/**
	@function
	@param {Number} frict
*/
Ammo.btGhostObject.prototype.setRollingFriction = function(frict) {};
/**
	@function
	@return {Ammo.btTransform}
*/
Ammo.btGhostObject.prototype.getWorldTransform = function() {
	return null;
};
/**
	@function
	@return {Number}
*/
Ammo.btGhostObject.prototype.getCollisionFlags = function() {
	return 0;
};
/**
	@function
	@param {Number} flags
*/
Ammo.btGhostObject.prototype.setCollisionFlags = function(flags) {};
/**
	@function
	@param {Ammo.btTransform} worldTrans
*/
Ammo.btGhostObject.prototype.setWorldTransform = function(worldTrans) {};
/**
	@function
	@param {Ammo.btCollisionShape} collisionShape
*/
Ammo.btGhostObject.prototype.setCollisionShape = function(collisionShape) {};
/**
	@function
	@param {Number} ccdMotionThreshold
*/
Ammo.btGhostObject.prototype.setCcdMotionThreshold = function(ccdMotionThreshold) {};
/**
	@function
	@param {Number} radius
*/
Ammo.btGhostObject.prototype.setCcdSweptSphereRadius = function(radius) {};
/**
	@function
	@return {Number}
*/
Ammo.btGhostObject.prototype.getUserIndex = function() {
	return 0;
};
/**
	@function
	@param {Number} index
*/
Ammo.btGhostObject.prototype.setUserIndex = function(index) {};
/**
	@function
	@return {*}
*/
Ammo.btGhostObject.prototype.getUserPointer = function() {
	return null;
};
/**
	@function
	@param {*} userPointer
*/
Ammo.btGhostObject.prototype.setUserPointer = function(userPointer) {};

/**
	@constructor
	@implements Ammo.btGhostObject
*/
Ammo.btPairCachingGhostObject = function() {};
/**
	@constructor
	@implements Ammo.btGhostObject
*/
Ammo.btPairCachingGhostObject = function() {};
/**
	@function
	@return {Number}
*/
Ammo.btPairCachingGhostObject.prototype.getNumOverlappingObjects = function() {
	return 0;
};
/**
	@function
	@param {Number} index
	@return {Ammo.btCollisionObject}
*/
Ammo.btPairCachingGhostObject.prototype.getOverlappingObject = function(index) {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} anisotropicFriction
	@param {Number} frictionMode
*/
Ammo.btPairCachingGhostObject.prototype.setAnisotropicFriction = function(anisotropicFriction, frictionMode) {};
/**
	@function
	@return {Ammo.btCollisionShape}
*/
Ammo.btPairCachingGhostObject.prototype.getCollisionShape = function() {
	return null;
};
/**
	@function
	@param {Number} contactProcessingThreshold
*/
Ammo.btPairCachingGhostObject.prototype.setContactProcessingThreshold = function(contactProcessingThreshold) {};
/**
	@function
	@param {Number} newState
*/
Ammo.btPairCachingGhostObject.prototype.setActivationState = function(newState) {};
/**
	@function
	@param {Number} newState
*/
Ammo.btPairCachingGhostObject.prototype.forceActivationState = function(newState) {};
/**
	@function
	@param {Boolean} [forceActivation]
*/
Ammo.btPairCachingGhostObject.prototype.activate = function(forceActivation) {};
/**
	@function
	@return {Boolean}
*/
Ammo.btPairCachingGhostObject.prototype.isActive = function() {
	return false;
};
/**
	@function
	@return {Boolean}
*/
Ammo.btPairCachingGhostObject.prototype.isKinematicObject = function() {
	return false;
};
/**
	@function
	@param {Number} rest
*/
Ammo.btPairCachingGhostObject.prototype.setRestitution = function(rest) {};
/**
	@function
	@param {Number} frict
*/
Ammo.btPairCachingGhostObject.prototype.setFriction = function(frict) {};
/**
	@function
	@param {Number} frict
*/
Ammo.btPairCachingGhostObject.prototype.setRollingFriction = function(frict) {};
/**
	@function
	@return {Ammo.btTransform}
*/
Ammo.btPairCachingGhostObject.prototype.getWorldTransform = function() {
	return null;
};
/**
	@function
	@return {Number}
*/
Ammo.btPairCachingGhostObject.prototype.getCollisionFlags = function() {
	return 0;
};
/**
	@function
	@param {Number} flags
*/
Ammo.btPairCachingGhostObject.prototype.setCollisionFlags = function(flags) {};
/**
	@function
	@param {Ammo.btTransform} worldTrans
*/
Ammo.btPairCachingGhostObject.prototype.setWorldTransform = function(worldTrans) {};
/**
	@function
	@param {Ammo.btCollisionShape} collisionShape
*/
Ammo.btPairCachingGhostObject.prototype.setCollisionShape = function(collisionShape) {};
/**
	@function
	@param {Number} ccdMotionThreshold
*/
Ammo.btPairCachingGhostObject.prototype.setCcdMotionThreshold = function(ccdMotionThreshold) {};
/**
	@function
	@param {Number} radius
*/
Ammo.btPairCachingGhostObject.prototype.setCcdSweptSphereRadius = function(radius) {};
/**
	@function
	@return {Number}
*/
Ammo.btPairCachingGhostObject.prototype.getUserIndex = function() {
	return 0;
};
/**
	@function
	@param {Number} index
*/
Ammo.btPairCachingGhostObject.prototype.setUserIndex = function(index) {};
/**
	@function
	@return {*}
*/
Ammo.btPairCachingGhostObject.prototype.getUserPointer = function() {
	return null;
};
/**
	@function
	@param {*} userPointer
*/
Ammo.btPairCachingGhostObject.prototype.setUserPointer = function(userPointer) {};

/**
	@constructor
*/
Ammo.btGhostPairCallback = function() {};

/**
	@constructor
*/
Ammo.btSoftBodyWorldInfo = function() {};
/**
	@function
	@return {Number}
*/
Ammo.btSoftBodyWorldInfo.prototype.get_air_density = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btSoftBodyWorldInfo.prototype.set_air_density = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btSoftBodyWorldInfo.prototype.get_water_density = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btSoftBodyWorldInfo.prototype.set_water_density = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btSoftBodyWorldInfo.prototype.get_water_offset = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btSoftBodyWorldInfo.prototype.set_water_offset = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.btSoftBodyWorldInfo.prototype.get_m_maxDisplacement = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.btSoftBodyWorldInfo.prototype.set_m_maxDisplacement = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btSoftBodyWorldInfo.prototype.get_water_normal = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.btSoftBodyWorldInfo.prototype.set_water_normal = function(value) {};
/**
	@function
	@return {Ammo.btBroadphaseInterface}
*/
Ammo.btSoftBodyWorldInfo.prototype.get_m_broadphase = function() {
	return null;
};
/**
	@function
	@param {Ammo.btBroadphaseInterface} value
*/
Ammo.btSoftBodyWorldInfo.prototype.set_m_broadphase = function(value) {};
/**
	@function
	@return {Ammo.btDispatcher}
*/
Ammo.btSoftBodyWorldInfo.prototype.get_m_dispatcher = function() {
	return null;
};
/**
	@function
	@param {Ammo.btDispatcher} value
*/
Ammo.btSoftBodyWorldInfo.prototype.set_m_dispatcher = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btSoftBodyWorldInfo.prototype.get_m_gravity = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.btSoftBodyWorldInfo.prototype.set_m_gravity = function(value) {};

/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.Node.prototype.get_m_x = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.Node.prototype.set_m_x = function(value) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.Node.prototype.get_m_n = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} value
*/
Ammo.Node.prototype.set_m_n = function(value) {};

/**
	@function
	@return {Number}
*/
Ammo.tNodeArray.prototype.size = function() {
	return 0;
};
/**
	@function
	@param {Number} n
	@return {Ammo.Node}
*/
Ammo.tNodeArray.prototype.at = function(n) {
	return null;
};

/**
	@function
	@return {Number}
*/
Ammo.Material.prototype.get_m_kLST = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Material.prototype.set_m_kLST = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Material.prototype.get_m_kAST = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Material.prototype.set_m_kAST = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Material.prototype.get_m_kVST = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Material.prototype.set_m_kVST = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Material.prototype.get_m_flags = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Material.prototype.set_m_flags = function(value) {};

/**
	@function
	@return {Number}
*/
Ammo.tMaterialArray.prototype.size = function() {
	return 0;
};
/**
	@function
	@param {Number} n
	@return {Ammo.Material}
*/
Ammo.tMaterialArray.prototype.at = function(n) {
	return null;
};

/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kVCF = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kVCF = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kDP = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kDP = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kDG = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kDG = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kLF = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kLF = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kPR = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kPR = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kVC = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kVC = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kDF = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kDF = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kMT = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kMT = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kCHR = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kCHR = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kKHR = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kKHR = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kSHR = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kSHR = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kAHR = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kAHR = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kSRHR_CL = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kSRHR_CL = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kSKHR_CL = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kSKHR_CL = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kSSHR_CL = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kSSHR_CL = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kSR_SPLT_CL = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kSR_SPLT_CL = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kSK_SPLT_CL = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kSK_SPLT_CL = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_kSS_SPLT_CL = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_kSS_SPLT_CL = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_maxvolume = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_maxvolume = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_timescale = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_timescale = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_viterations = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_viterations = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_piterations = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_piterations = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_diterations = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_diterations = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_citerations = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_citerations = function(value) {};
/**
	@function
	@return {Number}
*/
Ammo.Config.prototype.get_collisions = function() {
	return 0;
};
/**
	@function
	@param {Number} value
*/
Ammo.Config.prototype.set_collisions = function(value) {};

/**
	@constructor
	@implements Ammo.btCollisionObject
	@param {Ammo.btSoftBodyWorldInfo} worldInfo
	@param {Number} node_count
	@param {Ammo.btVector3} x
	@param {Array<Number>} m
*/
Ammo.btSoftBody = function(worldInfo, node_count, x, m) {};
/**
	@function
	@return {Ammo.Config}
*/
Ammo.btSoftBody.prototype.get_m_cfg = function() {
	return null;
};
/**
	@function
	@param {Ammo.Config} value
*/
Ammo.btSoftBody.prototype.set_m_cfg = function(value) {};
/**
	@function
	@return {Ammo.tNodeArray}
*/
Ammo.btSoftBody.prototype.get_m_nodes = function() {
	return null;
};
/**
	@function
	@param {Ammo.tNodeArray} value
*/
Ammo.btSoftBody.prototype.set_m_nodes = function(value) {};
/**
	@function
	@return {Ammo.tMaterialArray}
*/
Ammo.btSoftBody.prototype.get_m_materials = function() {
	return null;
};
/**
	@function
	@param {Ammo.tMaterialArray} value
*/
Ammo.btSoftBody.prototype.set_m_materials = function(value) {};
/**
	@function
	@param {Number} node0
	@param {Number} node1
	@return {Boolean}
*/
Ammo.btSoftBody.prototype.checkLink = function(node0, node1) {
	return false;
};
/**
	@function
	@param {Number} node0
	@param {Number} node1
	@param {Number} node2
	@return {Boolean}
*/
Ammo.btSoftBody.prototype.checkFace = function(node0, node1, node2) {
	return false;
};
/**
	@function
	@return {Ammo.Material}
*/
Ammo.btSoftBody.prototype.appendMaterial = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} x
	@param {Number} m
*/
Ammo.btSoftBody.prototype.appendNode = function(x, m) {};
/**
	@function
	@param {Number} node0
	@param {Number} node1
	@param {Ammo.Material} mat
	@param {Boolean} bcheckexist
*/
Ammo.btSoftBody.prototype.appendLink = function(node0, node1, mat, bcheckexist) {};
/**
	@function
	@param {Number} node0
	@param {Number} node1
	@param {Number} node2
	@param {Ammo.Material} mat
*/
Ammo.btSoftBody.prototype.appendFace = function(node0, node1, node2, mat) {};
/**
	@function
	@param {Number} node0
	@param {Number} node1
	@param {Number} node2
	@param {Number} node3
	@param {Ammo.Material} mat
*/
Ammo.btSoftBody.prototype.appendTetra = function(node0, node1, node2, node3, mat) {};
/**
	@function
	@param {Number} node
	@param {Ammo.btRigidBody} body
	@param {Boolean} disableCollisionBetweenLinkedBodies
	@param {Number} influence
*/
Ammo.btSoftBody.prototype.appendAnchor = function(node, body, disableCollisionBetweenLinkedBodies, influence) {};
/**
	@function
	@return {Number}
*/
Ammo.btSoftBody.prototype.getTotalMass = function() {
	return 0;
};
/**
	@function
	@param {Number} mass
	@param {Boolean} fromfaces
*/
Ammo.btSoftBody.prototype.setTotalMass = function(mass, fromfaces) {};
/**
	@function
	@param {Number} node
	@param {Number} mass
*/
Ammo.btSoftBody.prototype.setMass = function(node, mass) {};
/**
	@function
	@param {Ammo.btTransform} trs
*/
Ammo.btSoftBody.prototype.transform = function(trs) {};
/**
	@function
	@param {Ammo.btVector3} trs
*/
Ammo.btSoftBody.prototype.translate = function(trs) {};
/**
	@function
	@param {Ammo.btQuaternion} rot
*/
Ammo.btSoftBody.prototype.rotate = function(rot) {};
/**
	@function
	@param {Ammo.btVector3} scl
*/
Ammo.btSoftBody.prototype.scale = function(scl) {};
/**
	@function
	@param {Number} k
	@param {Number} [maxiterations]
	@return {Number}
*/
Ammo.btSoftBody.prototype.generateClusters = function(k, maxiterations) {
	return 0;
};
/**
	@function
	@param {Ammo.btCollisionObject} colObj
	@return {Ammo.btSoftBody}
*/
Ammo.btSoftBody.prototype.upcast = function(colObj) {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} anisotropicFriction
	@param {Number} frictionMode
*/
Ammo.btSoftBody.prototype.setAnisotropicFriction = function(anisotropicFriction, frictionMode) {};
/**
	@function
	@return {Ammo.btCollisionShape}
*/
Ammo.btSoftBody.prototype.getCollisionShape = function() {
	return null;
};
/**
	@function
	@param {Number} contactProcessingThreshold
*/
Ammo.btSoftBody.prototype.setContactProcessingThreshold = function(contactProcessingThreshold) {};
/**
	@function
	@param {Number} newState
*/
Ammo.btSoftBody.prototype.setActivationState = function(newState) {};
/**
	@function
	@param {Number} newState
*/
Ammo.btSoftBody.prototype.forceActivationState = function(newState) {};
/**
	@function
	@param {Boolean} [forceActivation]
*/
Ammo.btSoftBody.prototype.activate = function(forceActivation) {};
/**
	@function
	@return {Boolean}
*/
Ammo.btSoftBody.prototype.isActive = function() {
	return false;
};
/**
	@function
	@return {Boolean}
*/
Ammo.btSoftBody.prototype.isKinematicObject = function() {
	return false;
};
/**
	@function
	@param {Number} rest
*/
Ammo.btSoftBody.prototype.setRestitution = function(rest) {};
/**
	@function
	@param {Number} frict
*/
Ammo.btSoftBody.prototype.setFriction = function(frict) {};
/**
	@function
	@param {Number} frict
*/
Ammo.btSoftBody.prototype.setRollingFriction = function(frict) {};
/**
	@function
	@return {Ammo.btTransform}
*/
Ammo.btSoftBody.prototype.getWorldTransform = function() {
	return null;
};
/**
	@function
	@return {Number}
*/
Ammo.btSoftBody.prototype.getCollisionFlags = function() {
	return 0;
};
/**
	@function
	@param {Number} flags
*/
Ammo.btSoftBody.prototype.setCollisionFlags = function(flags) {};
/**
	@function
	@param {Ammo.btTransform} worldTrans
*/
Ammo.btSoftBody.prototype.setWorldTransform = function(worldTrans) {};
/**
	@function
	@param {Ammo.btCollisionShape} collisionShape
*/
Ammo.btSoftBody.prototype.setCollisionShape = function(collisionShape) {};
/**
	@function
	@param {Number} ccdMotionThreshold
*/
Ammo.btSoftBody.prototype.setCcdMotionThreshold = function(ccdMotionThreshold) {};
/**
	@function
	@param {Number} radius
*/
Ammo.btSoftBody.prototype.setCcdSweptSphereRadius = function(radius) {};
/**
	@function
	@return {Number}
*/
Ammo.btSoftBody.prototype.getUserIndex = function() {
	return 0;
};
/**
	@function
	@param {Number} index
*/
Ammo.btSoftBody.prototype.setUserIndex = function(index) {};
/**
	@function
	@return {*}
*/
Ammo.btSoftBody.prototype.getUserPointer = function() {
	return null;
};
/**
	@function
	@param {*} userPointer
*/
Ammo.btSoftBody.prototype.setUserPointer = function(userPointer) {};

/**
	@constructor
	@implements Ammo.btDefaultCollisionConfiguration
	@param {Ammo.btDefaultCollisionConstructionInfo} [info]
*/
Ammo.btSoftBodyRigidBodyCollisionConfiguration = function(info) {};
/**
	@constructor
	@implements Ammo.btDefaultCollisionConfiguration
	@param {Ammo.btDefaultCollisionConstructionInfo} [info]
*/
Ammo.btSoftBodyRigidBodyCollisionConfiguration = function(info) {};


/**
	@constructor
	@implements Ammo.btSoftBodySolver
*/
Ammo.btDefaultSoftBodySolver = function() {};

/**
	@function
	@return {Number}
*/
Ammo.btSoftBodyArray.prototype.size = function() {
	return 0;
};
/**
	@function
	@param {Number} n
	@return {Ammo.btSoftBody}
*/
Ammo.btSoftBodyArray.prototype.at = function(n) {
	return null;
};

/**
	@constructor
	@implements Ammo.btDiscreteDynamicsWorld
	@param {Ammo.btDispatcher} dispatcher
	@param {Ammo.btBroadphaseInterface} pairCache
	@param {Ammo.btConstraintSolver} constraintSolver
	@param {Ammo.btCollisionConfiguration} collisionConfiguration
	@param {Ammo.btSoftBodySolver} softBodySolver
*/
Ammo.btSoftRigidDynamicsWorld = function(dispatcher, pairCache, constraintSolver, collisionConfiguration, softBodySolver) {};
/**
	@function
	@param {Ammo.btSoftBody} body
	@param {Number} collisionFilterGroup
	@param {Number} collisionFilterMask
*/
Ammo.btSoftRigidDynamicsWorld.prototype.addSoftBody = function(body, collisionFilterGroup, collisionFilterMask) {};
/**
	@function
	@param {Ammo.btSoftBody} body
*/
Ammo.btSoftRigidDynamicsWorld.prototype.removeSoftBody = function(body) {};
/**
	@function
	@param {Ammo.btCollisionObject} collisionObject
*/
Ammo.btSoftRigidDynamicsWorld.prototype.removeCollisionObject = function(collisionObject) {};
/**
	@function
	@return {Ammo.btSoftBodyWorldInfo}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.getWorldInfo = function() {
	return null;
};
/**
	@function
	@return {Ammo.btSoftBodyArray}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.getSoftBodyArray = function() {
	return null;
};
/**
	@constructor
	@implements Ammo.btDiscreteDynamicsWorld
	@param {Ammo.btDispatcher} dispatcher
	@param {Ammo.btBroadphaseInterface} pairCache
	@param {Ammo.btConstraintSolver} constraintSolver
	@param {Ammo.btCollisionConfiguration} collisionConfiguration
*/
Ammo.btSoftRigidDynamicsWorld = function(dispatcher, pairCache, constraintSolver, collisionConfiguration) {};
/**
	@function
	@param {Ammo.btVector3} gravity
*/
Ammo.btSoftRigidDynamicsWorld.prototype.setGravity = function(gravity) {};
/**
	@function
	@return {Ammo.btVector3}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.getGravity = function() {
	return null;
};
/**
	@function
	@param {Ammo.btRigidBody} [body]
	@param {Number} [group]
	@param {Number} [mask]
*/
Ammo.btSoftRigidDynamicsWorld.prototype.addRigidBody = function(body, group, mask) {};
/**
	@function
	@param {Ammo.btRigidBody} body
*/
Ammo.btSoftRigidDynamicsWorld.prototype.removeRigidBody = function(body) {};
/**
	@function
	@param {Ammo.btTypedConstraint} constraint
	@param {Boolean} [disableCollisionsBetweenLinkedBodies]
*/
Ammo.btSoftRigidDynamicsWorld.prototype.addConstraint = function(constraint, disableCollisionsBetweenLinkedBodies) {};
/**
	@function
	@param {Ammo.btTypedConstraint} constraint
*/
Ammo.btSoftRigidDynamicsWorld.prototype.removeConstraint = function(constraint) {};
/**
	@function
	@param {Number} timeStep
	@param {Number} [maxSubSteps]
	@param {Number} [fixedTimeStep]
	@return {Number}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.stepSimulation = function(timeStep, maxSubSteps, fixedTimeStep) {
	return 0;
};
/**
	@function
	@param {Ammo.btActionInterface} action
*/
Ammo.btSoftRigidDynamicsWorld.prototype.addAction = function(action) {};
/**
	@function
	@param {Ammo.btActionInterface} action
*/
Ammo.btSoftRigidDynamicsWorld.prototype.removeAction = function(action) {};
/**
	@function
	@return {Ammo.btContactSolverInfo}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.getSolverInfo = function() {
	return null;
};
/**
	@function
	@return {Ammo.btDispatcher}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.getDispatcher = function() {
	return null;
};
/**
	@function
	@param {Ammo.btVector3} rayFromWorld
	@param {Ammo.btVector3} rayToWorld
	@param {Ammo.RayResultCallback} resultCallback
*/
Ammo.btSoftRigidDynamicsWorld.prototype.rayTest = function(rayFromWorld, rayToWorld, resultCallback) {};
/**
	@function
	@return {Ammo.btOverlappingPairCache}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.getPairCache = function() {
	return null;
};
/**
	@function
	@return {Ammo.btDispatcherInfo}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.getDispatchInfo = function() {
	return null;
};
/**
	@function
	@param {Ammo.btCollisionObject} collisionObject
	@param {Number} [collisionFilterGroup]
	@param {Number} [collisionFilterMask]
*/
Ammo.btSoftRigidDynamicsWorld.prototype.addCollisionObject = function(collisionObject, collisionFilterGroup, collisionFilterMask) {};
/**
	@function
	@return {Ammo.btBroadphaseInterface}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.getBroadphase = function() {
	return null;
};
/**
	@function
	@param {Ammo.btConvexShape} castShape
	@param {Ammo.btTransform} from
	@param {Ammo.btTransform} to
	@param {Ammo.ConvexResultCallback} resultCallback
	@param {Number} allowedCcdPenetration
*/
Ammo.btSoftRigidDynamicsWorld.prototype.convexSweepTest = function(castShape, from, to, resultCallback, allowedCcdPenetration) {};
/**
	@function
	@param {Ammo.btCollisionObject} colObjA
	@param {Ammo.btCollisionObject} colObjB
	@param {Ammo.ContactResultCallback} resultCallback
*/
Ammo.btSoftRigidDynamicsWorld.prototype.contactPairTest = function(colObjA, colObjB, resultCallback) {};
/**
	@function
	@param {Ammo.btCollisionObject} colObj
	@param {Ammo.ContactResultCallback} resultCallback
*/
Ammo.btSoftRigidDynamicsWorld.prototype.contactTest = function(colObj, resultCallback) {};

/**
	@constructor
*/
Ammo.btSoftBodyHelpers = function() {};
/**
	@function
	@param {Ammo.btSoftBodyWorldInfo} worldInfo
	@param {Ammo.btVector3} from
	@param {Ammo.btVector3} to
	@param {Number} res
	@param {Number} fixeds
	@return {Ammo.btSoftBody}
*/
Ammo.btSoftBodyHelpers.prototype.CreateRope = function(worldInfo, from, to, res, fixeds) {
	return null;
};
/**
	@function
	@param {Ammo.btSoftBodyWorldInfo} worldInfo
	@param {Ammo.btVector3} corner00
	@param {Ammo.btVector3} corner10
	@param {Ammo.btVector3} corner01
	@param {Ammo.btVector3} corner11
	@param {Number} resx
	@param {Number} resy
	@param {Number} fixeds
	@param {Boolean} gendiags
	@return {Ammo.btSoftBody}
*/
Ammo.btSoftBodyHelpers.prototype.CreatePatch = function(worldInfo, corner00, corner10, corner01, corner11, resx, resy, fixeds, gendiags) {
	return null;
};
/**
	@function
	@param {Ammo.btSoftBodyWorldInfo} worldInfo
	@param {Ammo.btVector3} corner00
	@param {Ammo.btVector3} corner10
	@param {Ammo.btVector3} corner01
	@param {Ammo.btVector3} corner11
	@param {Number} resx
	@param {Number} resy
	@param {Number} fixeds
	@param {Boolean} gendiags
	@param {Array<Number>} tex_coords
	@return {Ammo.btSoftBody}
*/
Ammo.btSoftBodyHelpers.prototype.CreatePatchUV = function(worldInfo, corner00, corner10, corner01, corner11, resx, resy, fixeds, gendiags, tex_coords) {
	return null;
};
/**
	@function
	@param {Ammo.btSoftBodyWorldInfo} worldInfo
	@param {Ammo.btVector3} center
	@param {Ammo.btVector3} radius
	@param {Number} res
	@return {Ammo.btSoftBody}
*/
Ammo.btSoftBodyHelpers.prototype.CreateEllipsoid = function(worldInfo, center, radius, res) {
	return null;
};
/**
	@function
	@param {Ammo.btSoftBodyWorldInfo} worldInfo
	@param {Array<Number>} vertices
	@param {Array<Number>} triangles
	@param {Number} ntriangles
	@param {Boolean} randomizeConstraints
	@return {Ammo.btSoftBody}
*/
Ammo.btSoftBodyHelpers.prototype.CreateFromTriMesh = function(worldInfo, vertices, triangles, ntriangles, randomizeConstraints) {
	return null;
};
/**
	@function
	@param {Ammo.btSoftBodyWorldInfo} worldInfo
	@param {Ammo.btVector3} vertices
	@param {Number} nvertices
	@param {Boolean} randomizeConstraints
	@return {Ammo.btSoftBody}
*/
Ammo.btSoftBodyHelpers.prototype.CreateFromConvexHull = function(worldInfo, vertices, nvertices, randomizeConstraints) {
	return null;
};
