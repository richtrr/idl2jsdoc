var Ammo = {};
/**
	@constructor
*/
Ammo.btVector3 = function() {};
/**
	@constructor
	@param x {Number}
	@param y {Number}
	@param z {Number}
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
	@param x {Number}
*/
Ammo.btVector3.prototype.setX = function(x) {};
/**
	@function
	@param y {Number}
*/
Ammo.btVector3.prototype.setY = function(y) {};
/**
	@function
	@param z {Number}
*/
Ammo.btVector3.prototype.setZ = function(z) {};
/**
	@function
	@param x {Number}
	@param y {Number}
	@param z {Number}
*/
Ammo.btVector3.prototype.setValue = function(x, y, z) {};
/**
	@function
*/
Ammo.btVector3.prototype.normalize = function() {};
/**
	@function
	@param v {Ammo.btVector3}
	@return {Number}
*/
Ammo.btVector3.prototype.dot = function(v) {
	return 0;
};
/**
	@function
	@param x {Number}
	@return {Ammo.btVector3}
*/
Ammo.btVector3.prototype.op_mul = function(x) {
	return null;
};
/**
	@function
	@param v {Ammo.btVector3}
	@return {Ammo.btVector3}
*/
Ammo.btVector3.prototype.op_add = function(v) {
	return null;
};
/**
	@function
	@param v {Ammo.btVector3}
	@return {Ammo.btVector3}
*/
Ammo.btVector3.prototype.op_sub = function(v) {
	return null;
};

/**
	@constructor
	@implements Ammo.btVector3
*/
Ammo.btVector4 = function() {};
/**
	@constructor
	@implements Ammo.btVector3
	@param x {Number}
	@param y {Number}
	@param z {Number}
	@param w {Number}
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
	@param x {Number}
	@param y {Number}
	@param z {Number}
	@param w {Number}
*/
Ammo.btVector4.prototype.setValue = function(x, y, z, w) {};
/**
	@constructor
	@implements Ammo.btVector3
*/
Ammo.btVector4 = function() {};
/**
	@constructor
	@implements Ammo.btVector3
	@param x {Number}
	@param y {Number}
	@param z {Number}
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
	@param x {Number}
*/
Ammo.btVector4.prototype.setX = function(x) {};
/**
	@function
	@param y {Number}
*/
Ammo.btVector4.prototype.setY = function(y) {};
/**
	@function
	@param z {Number}
*/
Ammo.btVector4.prototype.setZ = function(z) {};
/**
	@function
	@param x {Number}
	@param y {Number}
	@param z {Number}
*/
Ammo.btVector4.prototype.setValue = function(x, y, z) {};
/**
	@function
*/
Ammo.btVector4.prototype.normalize = function() {};
/**
	@function
	@param v {Ammo.btVector3}
	@return {Number}
*/
Ammo.btVector4.prototype.dot = function(v) {
	return 0;
};
/**
	@function
	@param x {Number}
	@return {Ammo.btVector3}
*/
Ammo.btVector4.prototype.op_mul = function(x) {
	return null;
};
/**
	@function
	@param v {Ammo.btVector3}
	@return {Ammo.btVector3}
*/
Ammo.btVector4.prototype.op_add = function(v) {
	return null;
};
/**
	@function
	@param v {Ammo.btVector3}
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
	@param x {Number}
*/
Ammo.btQuadWord.prototype.setX = function(x) {};
/**
	@function
	@param y {Number}
*/
Ammo.btQuadWord.prototype.setY = function(y) {};
/**
	@function
	@param z {Number}
*/
Ammo.btQuadWord.prototype.setZ = function(z) {};
/**
	@function
	@param w {Number}
*/
Ammo.btQuadWord.prototype.setW = function(w) {};

/**
	@constructor
	@implements Ammo.btQuadWord
	@param x {Number}
	@param y {Number}
	@param z {Number}
	@param w {Number}
*/
Ammo.btQuaternion = function(x, y, z, w) {};
/**
	@function
	@param x {Number}
	@param y {Number}
	@param z {Number}
	@param w {Number}
*/
Ammo.btQuaternion.prototype.setValue = function(x, y, z, w) {};
/**
	@function
	@param z {Number}
	@param y {Number}
	@param x {Number}
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
	@param x {Number}
*/
Ammo.btQuaternion.prototype.setX = function(x) {};
/**
	@function
	@param y {Number}
*/
Ammo.btQuaternion.prototype.setY = function(y) {};
/**
	@function
	@param z {Number}
*/
Ammo.btQuaternion.prototype.setZ = function(z) {};
/**
	@function
	@param w {Number}
*/
Ammo.btQuaternion.prototype.setW = function(w) {};

/**
	@function
	@param ex {Number}
	@param ey {Number}
	@param ez {Number}
*/
Ammo.btMatrix3x3.prototype.setEulerZYX = function(ex, ey, ez) {};
/**
	@function
	@param q {Ammo.btQuaternion}
*/
Ammo.btMatrix3x3.prototype.getRotation = function(q) {};
/**
	@function
	@param y {Number}
	@return {Ammo.btVector3}
*/
Ammo.btMatrix3x3.prototype.getRow = function(y) {
	return null;
};

/**
	@constructor
*/
Ammo.btTransform = function() {};
/**
	@constructor
	@param q {Ammo.btQuaternion}
	@param v {Ammo.btVector3}
*/
Ammo.btTransform = function(q, v) {};
/**
	@function
*/
Ammo.btTransform.prototype.setIdentity = function() {};
/**
	@function
	@param origin {Ammo.btVector3}
*/
Ammo.btTransform.prototype.setOrigin = function(origin) {};
/**
	@function
	@param rotation {Ammo.btQuaternion}
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
	@param m {Array<Number>}
*/
Ammo.btTransform.prototype.setFromOpenGLMatrix = function(m) {};

/**
	@function
	@param worldTrans {Ammo.btTransform}
*/
Ammo.btMotionState.prototype.getWorldTransform = function(worldTrans) {};
/**
	@function
	@param worldTrans {Ammo.btTransform}
*/
Ammo.btMotionState.prototype.setWorldTransform = function(worldTrans) {};

/**
	@constructor
	@implements Ammo.btMotionState
	@param [startTrans] {Ammo.btTransform}
	@param [centerOfMassOffset] {Ammo.btTransform}
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
	@param value {Ammo.btTransform}
*/
Ammo.btDefaultMotionState.prototype.set_m_graphicsWorldTrans = function(value) {};
/**
	@function
	@param worldTrans {Ammo.btTransform}
*/
Ammo.btDefaultMotionState.prototype.getWorldTransform = function(worldTrans) {};
/**
	@function
	@param worldTrans {Ammo.btTransform}
*/
Ammo.btDefaultMotionState.prototype.setWorldTransform = function(worldTrans) {};

/**
	@function
	@param anisotropicFriction {Ammo.btVector3}
	@param frictionMode {Number}
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
	@param contactProcessingThreshold {Number}
*/
Ammo.btCollisionObject.prototype.setContactProcessingThreshold = function(contactProcessingThreshold) {};
/**
	@function
	@param newState {Number}
*/
Ammo.btCollisionObject.prototype.setActivationState = function(newState) {};
/**
	@function
	@param newState {Number}
*/
Ammo.btCollisionObject.prototype.forceActivationState = function(newState) {};
/**
	@function
	@param [forceActivation] {Boolean}
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
	@param rest {Number}
*/
Ammo.btCollisionObject.prototype.setRestitution = function(rest) {};
/**
	@function
	@param frict {Number}
*/
Ammo.btCollisionObject.prototype.setFriction = function(frict) {};
/**
	@function
	@param frict {Number}
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
	@param flags {Number}
*/
Ammo.btCollisionObject.prototype.setCollisionFlags = function(flags) {};
/**
	@function
	@param worldTrans {Ammo.btTransform}
*/
Ammo.btCollisionObject.prototype.setWorldTransform = function(worldTrans) {};
/**
	@function
	@param collisionShape {Ammo.btCollisionShape}
*/
Ammo.btCollisionObject.prototype.setCollisionShape = function(collisionShape) {};
/**
	@function
	@param ccdMotionThreshold {Number}
*/
Ammo.btCollisionObject.prototype.setCcdMotionThreshold = function(ccdMotionThreshold) {};
/**
	@function
	@param radius {Number}
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
	@param index {Number}
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
	@param userPointer {*}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Ammo.btCollisionObject}
*/
Ammo.RayResultCallback.prototype.set_m_collisionObject = function(value) {};

/**
	@constructor
	@implements Ammo.RayResultCallback
	@param from {Ammo.btVector3}
	@param to {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Ammo.btCollisionObject}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
*/
Ammo.btManifoldPoint.prototype.set_m_normalWorldOnB = function(value) {};

/**
	@function
	@param cp {Ammo.btManifoldPoint}
	@param colObj0Wrap {Ammo.btCollisionObjectWrapper}
	@param partId0 {Number}
	@param index0 {Number}
	@param colObj1Wrap {Ammo.btCollisionObjectWrapper}
	@param partId1 {Number}
	@param index1 {Number}
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
	@param cp {Ammo.btManifoldPoint}
	@param colObj0Wrap {Ammo.btCollisionObjectWrapper}
	@param partId0 {Number}
	@param index0 {Number}
	@param colObj1Wrap {Ammo.btCollisionObjectWrapper}
	@param partId1 {Number}
	@param index1 {Number}
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
	@param value {Number}
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
	@param value {Number}
*/
Ammo.LocalShapeInfo.prototype.set_m_triangleIndex = function(value) {};

/**
	@constructor
	@param hitCollisionObject {Ammo.btCollisionObject}
	@param localShapeInfo {Ammo.LocalShapeInfo}
	@param hitNormalLocal {Ammo.btVector3}
	@param hitPointLocal {Ammo.btVector3}
	@param hitFraction {Number}
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
	@param value {Ammo.btCollisionObject}
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
	@param value {Ammo.LocalShapeInfo}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
*/
Ammo.ConvexResultCallback.prototype.set_m_closestHitFraction = function(value) {};

/**
	@constructor
	@implements Ammo.ConvexResultCallback
	@param convexFromWorld {Ammo.btVector3}
	@param convexToWorld {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
*/
Ammo.ClosestConvexResultCallback.prototype.set_m_closestHitFraction = function(value) {};

/**
	@function
	@param scaling {Ammo.btVector3}
*/
Ammo.btCollisionShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btCollisionShape.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param margin {Number}
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
	@param scaling {Ammo.btVector3}
*/
Ammo.btConvexShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btConvexShape.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param margin {Number}
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
	@param meshInterface {Ammo.btStridingMeshInterface}
	@param [calcAabb] {Boolean}
*/
Ammo.btConvexTriangleMeshShape = function(meshInterface, calcAabb) {};
/**
	@function
	@param scaling {Ammo.btVector3}
*/
Ammo.btConvexTriangleMeshShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btConvexTriangleMeshShape.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param margin {Number}
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
	@param boxHalfExtents {Ammo.btVector3}
*/
Ammo.btBoxShape = function(boxHalfExtents) {};
/**
	@function
	@param margin {Number}
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
	@param scaling {Ammo.btVector3}
*/
Ammo.btBoxShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btBoxShape.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btCollisionShape
	@param radius {Number}
	@param height {Number}
*/
Ammo.btCapsuleShape = function(radius, height) {};
/**
	@function
	@param margin {Number}
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
	@param scaling {Ammo.btVector3}
*/
Ammo.btCapsuleShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btCapsuleShape.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btCapsuleShape
	@param radius {Number}
	@param height {Number}
*/
Ammo.btCapsuleShapeX = function(radius, height) {};
/**
	@function
	@param margin {Number}
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
	@param radius {Number}
	@param height {Number}
*/
Ammo.btCapsuleShapeX = function(radius, height) {};
/**
	@function
	@param scaling {Ammo.btVector3}
*/
Ammo.btCapsuleShapeX.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btCapsuleShapeX.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btCapsuleShape
	@param radius {Number}
	@param height {Number}
*/
Ammo.btCapsuleShapeZ = function(radius, height) {};
/**
	@function
	@param margin {Number}
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
	@param radius {Number}
	@param height {Number}
*/
Ammo.btCapsuleShapeZ = function(radius, height) {};
/**
	@function
	@param scaling {Ammo.btVector3}
*/
Ammo.btCapsuleShapeZ.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btCapsuleShapeZ.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btCollisionShape
	@param halfExtents {Ammo.btVector3}
*/
Ammo.btCylinderShape = function(halfExtents) {};
/**
	@function
	@param margin {Number}
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
	@param scaling {Ammo.btVector3}
*/
Ammo.btCylinderShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btCylinderShape.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btCylinderShape
	@param halfExtents {Ammo.btVector3}
*/
Ammo.btCylinderShapeX = function(halfExtents) {};
/**
	@function
	@param margin {Number}
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
	@param halfExtents {Ammo.btVector3}
*/
Ammo.btCylinderShapeX = function(halfExtents) {};
/**
	@function
	@param scaling {Ammo.btVector3}
*/
Ammo.btCylinderShapeX.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btCylinderShapeX.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btCylinderShape
	@param halfExtents {Ammo.btVector3}
*/
Ammo.btCylinderShapeZ = function(halfExtents) {};
/**
	@function
	@param margin {Number}
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
	@param halfExtents {Ammo.btVector3}
*/
Ammo.btCylinderShapeZ = function(halfExtents) {};
/**
	@function
	@param scaling {Ammo.btVector3}
*/
Ammo.btCylinderShapeZ.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btCylinderShapeZ.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btCollisionShape
	@param radius {Number}
*/
Ammo.btSphereShape = function(radius) {};
/**
	@function
	@param margin {Number}
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
	@param scaling {Ammo.btVector3}
*/
Ammo.btSphereShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btSphereShape.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btCollisionShape
	@param radius {Number}
	@param height {Number}
*/
Ammo.btConeShape = function(radius, height) {};
/**
	@function
	@param scaling {Ammo.btVector3}
*/
Ammo.btConeShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btConeShape.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param margin {Number}
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
	@param point {Ammo.btVector3}
	@param [recalculateLocalAABB] {Boolean}
*/
Ammo.btConvexHullShape.prototype.addPoint = function(point, recalculateLocalAABB) {};
/**
	@function
	@param margin {Number}
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
	@param scaling {Ammo.btVector3}
*/
Ammo.btConvexHullShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btConvexHullShape.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
	@implements Ammo.btConeShape
	@param radius {Number}
	@param height {Number}
*/
Ammo.btConeShapeX = function(radius, height) {};
/**
	@constructor
	@implements Ammo.btConeShape
	@param radius {Number}
	@param height {Number}
*/
Ammo.btConeShapeX = function(radius, height) {};
/**
	@function
	@param scaling {Ammo.btVector3}
*/
Ammo.btConeShapeX.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btConeShapeX.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param margin {Number}
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
	@param radius {Number}
	@param height {Number}
*/
Ammo.btConeShapeZ = function(radius, height) {};
/**
	@constructor
	@implements Ammo.btConeShape
	@param radius {Number}
	@param height {Number}
*/
Ammo.btConeShapeZ = function(radius, height) {};
/**
	@function
	@param scaling {Ammo.btVector3}
*/
Ammo.btConeShapeZ.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btConeShapeZ.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param margin {Number}
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
	@param [enableDynamicAabbTree] {Boolean}
*/
Ammo.btCompoundShape = function(enableDynamicAabbTree) {};
/**
	@function
	@param localTransform {Ammo.btTransform}
	@param shape {Ammo.btCollisionShape}
*/
Ammo.btCompoundShape.prototype.addChildShape = function(localTransform, shape) {};
/**
	@function
	@param childShapeindex {Number}
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
	@param index {Number}
	@return {Ammo.btCollisionShape}
*/
Ammo.btCompoundShape.prototype.getChildShape = function(index) {
	return null;
};
/**
	@function
	@param margin {Number}
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
	@param scaling {Ammo.btVector3}
*/
Ammo.btCompoundShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btCompoundShape.prototype.calculateLocalInertia = function(mass, inertia) {};


/**
	@constructor
	@implements Ammo.btStridingMeshInterface
	@param [use32bitIndices] {Boolean}
	@param [use4componentVertices] {Boolean}
*/
Ammo.btTriangleMesh = function(use32bitIndices, use4componentVertices) {};
/**
	@function
	@param vertex0 {Ammo.btVector3}
	@param vertex1 {Ammo.btVector3}
	@param vertex2 {Ammo.btVector3}
	@param [removeDuplicateVertices] {Boolean}
*/
Ammo.btTriangleMesh.prototype.addTriangle = function(vertex0, vertex1, vertex2, removeDuplicateVertices) {};

/**
	@function
	@param scaling {Ammo.btVector3}
*/
Ammo.btConcaveShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btConcaveShape.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param margin {Number}
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
	@param planeNormal {Ammo.btVector3}
	@param planeConstant {Number}
*/
Ammo.btStaticPlaneShape = function(planeNormal, planeConstant) {};
/**
	@function
	@param scaling {Ammo.btVector3}
*/
Ammo.btStaticPlaneShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btStaticPlaneShape.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param margin {Number}
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
	@param scaling {Ammo.btVector3}
*/
Ammo.btTriangleMeshShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btTriangleMeshShape.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param margin {Number}
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
	@param meshInterface {Ammo.btStridingMeshInterface}
	@param useQuantizedAabbCompression {Boolean}
	@param [buildBvh] {Boolean}
*/
Ammo.btBvhTriangleMeshShape = function(meshInterface, useQuantizedAabbCompression, buildBvh) {};
/**
	@function
	@param scaling {Ammo.btVector3}
*/
Ammo.btBvhTriangleMeshShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btBvhTriangleMeshShape.prototype.calculateLocalInertia = function(mass, inertia) {};
/**
	@function
	@param margin {Number}
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
	@param heightStickWidth {Number}
	@param heightStickLength {Number}
	@param heightfieldData {*}
	@param heightScale {Number}
	@param minHeight {Number}
	@param maxHeight {Number}
	@param upAxis {Number}
	@param hdt {*}
	@param flipQuadEdges {Boolean}
*/
Ammo.btHeightfieldTerrainShape = function(heightStickWidth, heightStickLength, heightfieldData, heightScale, minHeight, maxHeight, upAxis, hdt, flipQuadEdges) {};
/**
	@function
	@param margin {Number}
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
	@param scaling {Ammo.btVector3}
*/
Ammo.btHeightfieldTerrainShape.prototype.setLocalScaling = function(scaling) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btHeightfieldTerrainShape.prototype.calculateLocalInertia = function(mass, inertia) {};

/**
	@constructor
*/
Ammo.btDefaultCollisionConstructionInfo = function() {};

/**
	@constructor
	@param [info] {Ammo.btDefaultCollisionConstructionInfo}
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
	@param index {Number}
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
	@param index {Number}
	@return {Ammo.btPersistentManifold}
*/
Ammo.btDispatcher.prototype.getManifoldByIndexInternal = function(index) {
	return null;
};

/**
	@constructor
	@implements Ammo.btDispatcher
	@param conf {Ammo.btDefaultCollisionConfiguration}
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
	@param index {Number}
	@return {Ammo.btPersistentManifold}
*/
Ammo.btCollisionDispatcher.prototype.getManifoldByIndexInternal = function(index) {
	return null;
};


/**
	@function
	@param ghostPairCallback {Ammo.btOverlappingPairCallback}
*/
Ammo.btOverlappingPairCache.prototype.setInternalGhostPairCallback = function(ghostPairCallback) {};

/**
	@constructor
	@param worldAabbMin {Ammo.btVector3}
	@param worldAabbMax {Ammo.btVector3}
	@param [maxHandles] {Number}
	@param [pairCache] {Ammo.btOverlappingPairCache}
	@param [disableRaycastAccelerator] {Boolean}
*/
Ammo.btAxisSweep3 = function(worldAabbMin, worldAabbMax, maxHandles, pairCache, disableRaycastAccelerator) {};



/**
	@constructor
*/
Ammo.btDbvtBroadphase = function() {};

/**
	@constructor
	@param mass {Number}
	@param motionState {Ammo.btMotionState}
	@param collisionShape {Ammo.btCollisionShape}
	@param [localInertia] {Ammo.btVector3}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Boolean}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
*/
Ammo.btRigidBodyConstructionInfo.prototype.set_m_additionalAngularDampingFactor = function(value) {};

/**
	@constructor
	@implements Ammo.btCollisionObject
	@param constructionInfo {Ammo.btRigidBodyConstructionInfo}
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
	@param xform {Ammo.btTransform}
*/
Ammo.btRigidBody.prototype.setCenterOfMassTransform = function(xform) {};
/**
	@function
	@param linear {Number}
	@param angular {Number}
*/
Ammo.btRigidBody.prototype.setSleepingThresholds = function(linear, angular) {};
/**
	@function
	@param lin_damping {Number}
	@param ang_damping {Number}
*/
Ammo.btRigidBody.prototype.setDamping = function(lin_damping, ang_damping) {};
/**
	@function
	@param mass {Number}
	@param inertia {Ammo.btVector3}
*/
Ammo.btRigidBody.prototype.setMassProps = function(mass, inertia) {};
/**
	@function
	@param linearFactor {Ammo.btVector3}
*/
Ammo.btRigidBody.prototype.setLinearFactor = function(linearFactor) {};
/**
	@function
	@param torque {Ammo.btVector3}
*/
Ammo.btRigidBody.prototype.applyTorque = function(torque) {};
/**
	@function
	@param torque {Ammo.btVector3}
*/
Ammo.btRigidBody.prototype.applyLocalTorque = function(torque) {};
/**
	@function
	@param force {Ammo.btVector3}
	@param rel_pos {Ammo.btVector3}
*/
Ammo.btRigidBody.prototype.applyForce = function(force, rel_pos) {};
/**
	@function
	@param force {Ammo.btVector3}
*/
Ammo.btRigidBody.prototype.applyCentralForce = function(force) {};
/**
	@function
	@param force {Ammo.btVector3}
*/
Ammo.btRigidBody.prototype.applyCentralLocalForce = function(force) {};
/**
	@function
	@param torque {Ammo.btVector3}
*/
Ammo.btRigidBody.prototype.applyTorqueImpulse = function(torque) {};
/**
	@function
	@param impulse {Ammo.btVector3}
	@param rel_pos {Ammo.btVector3}
*/
Ammo.btRigidBody.prototype.applyImpulse = function(impulse, rel_pos) {};
/**
	@function
	@param impulse {Ammo.btVector3}
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
	@param lin_vel {Ammo.btVector3}
*/
Ammo.btRigidBody.prototype.setLinearVelocity = function(lin_vel) {};
/**
	@function
	@param ang_vel {Ammo.btVector3}
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
	@param motionState {Ammo.btMotionState}
*/
Ammo.btRigidBody.prototype.setMotionState = function(motionState) {};
/**
	@function
	@param angularFactor {Ammo.btVector3}
*/
Ammo.btRigidBody.prototype.setAngularFactor = function(angularFactor) {};
/**
	@function
	@param colObj {Ammo.btCollisionObject}
	@return {Ammo.btRigidBody}
*/
Ammo.btRigidBody.prototype.upcast = function(colObj) {
	return null;
};
/**
	@function
	@param anisotropicFriction {Ammo.btVector3}
	@param frictionMode {Number}
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
	@param contactProcessingThreshold {Number}
*/
Ammo.btRigidBody.prototype.setContactProcessingThreshold = function(contactProcessingThreshold) {};
/**
	@function
	@param newState {Number}
*/
Ammo.btRigidBody.prototype.setActivationState = function(newState) {};
/**
	@function
	@param newState {Number}
*/
Ammo.btRigidBody.prototype.forceActivationState = function(newState) {};
/**
	@function
	@param [forceActivation] {Boolean}
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
	@param rest {Number}
*/
Ammo.btRigidBody.prototype.setRestitution = function(rest) {};
/**
	@function
	@param frict {Number}
*/
Ammo.btRigidBody.prototype.setFriction = function(frict) {};
/**
	@function
	@param frict {Number}
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
	@param flags {Number}
*/
Ammo.btRigidBody.prototype.setCollisionFlags = function(flags) {};
/**
	@function
	@param worldTrans {Ammo.btTransform}
*/
Ammo.btRigidBody.prototype.setWorldTransform = function(worldTrans) {};
/**
	@function
	@param collisionShape {Ammo.btCollisionShape}
*/
Ammo.btRigidBody.prototype.setCollisionShape = function(collisionShape) {};
/**
	@function
	@param ccdMotionThreshold {Number}
*/
Ammo.btRigidBody.prototype.setCcdMotionThreshold = function(ccdMotionThreshold) {};
/**
	@function
	@param radius {Number}
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
	@param index {Number}
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
	@param userPointer {*}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
*/
Ammo.btConstraintSetting.prototype.set_m_impulseClamp = function(value) {};

/**
	@function
	@param needsFeedback {Boolean}
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
	@param threshold {Number}
*/
Ammo.btTypedConstraint.prototype.setBreakingImpulseThreshold = function(threshold) {};

/**
	@constructor
	@implements Ammo.btTypedConstraint
	@param rbA {Ammo.btRigidBody}
	@param rbB {Ammo.btRigidBody}
	@param pivotInA {Ammo.btVector3}
	@param pivotInB {Ammo.btVector3}
*/
Ammo.btPoint2PointConstraint = function(rbA, rbB, pivotInA, pivotInB) {};
/**
	@constructor
	@implements Ammo.btTypedConstraint
	@param rbA {Ammo.btRigidBody}
	@param pivotInA {Ammo.btVector3}
*/
Ammo.btPoint2PointConstraint = function(rbA, pivotInA) {};
/**
	@function
	@param pivotA {Ammo.btVector3}
*/
Ammo.btPoint2PointConstraint.prototype.setPivotA = function(pivotA) {};
/**
	@function
	@param pivotB {Ammo.btVector3}
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
	@param value {Ammo.btConstraintSetting}
*/
Ammo.btPoint2PointConstraint.prototype.set_m_setting = function(value) {};
/**
	@function
	@param needsFeedback {Boolean}
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
	@param threshold {Number}
*/
Ammo.btPoint2PointConstraint.prototype.setBreakingImpulseThreshold = function(threshold) {};

/**
	@constructor
	@implements Ammo.btTypedConstraint
	@param rbA {Ammo.btRigidBody}
	@param rbB {Ammo.btRigidBody}
	@param frameInA {Ammo.btTransform}
	@param frameInB {Ammo.btTransform}
	@param useLinearFrameReferenceFrameA {Boolean}
*/
Ammo.btGeneric6DofConstraint = function(rbA, rbB, frameInA, frameInB, useLinearFrameReferenceFrameA) {};
/**
	@constructor
	@implements Ammo.btTypedConstraint
	@param rbB {Ammo.btRigidBody}
	@param frameInB {Ammo.btTransform}
	@param useLinearFrameReferenceFrameB {Boolean}
*/
Ammo.btGeneric6DofConstraint = function(rbB, frameInB, useLinearFrameReferenceFrameB) {};
/**
	@function
	@param linearLower {Ammo.btVector3}
*/
Ammo.btGeneric6DofConstraint.prototype.setLinearLowerLimit = function(linearLower) {};
/**
	@function
	@param linearUpper {Ammo.btVector3}
*/
Ammo.btGeneric6DofConstraint.prototype.setLinearUpperLimit = function(linearUpper) {};
/**
	@function
	@param angularLower {Ammo.btVector3}
*/
Ammo.btGeneric6DofConstraint.prototype.setAngularLowerLimit = function(angularLower) {};
/**
	@function
	@param angularUpper {Ammo.btVector3}
*/
Ammo.btGeneric6DofConstraint.prototype.setAngularUpperLimit = function(angularUpper) {};
/**
	@function
	@param needsFeedback {Boolean}
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
	@param threshold {Number}
*/
Ammo.btGeneric6DofConstraint.prototype.setBreakingImpulseThreshold = function(threshold) {};

/**
	@constructor
	@implements Ammo.btGeneric6DofConstraint
	@param rbA {Ammo.btRigidBody}
	@param rbB {Ammo.btRigidBody}
	@param frameInA {Ammo.btTransform}
	@param frameInB {Ammo.btTransform}
	@param useLinearFrameReferenceFrameA {Boolean}
*/
Ammo.btGeneric6DofSpringConstraint = function(rbA, rbB, frameInA, frameInB, useLinearFrameReferenceFrameA) {};
/**
	@constructor
	@implements Ammo.btGeneric6DofConstraint
	@param rbB {Ammo.btRigidBody}
	@param frameInB {Ammo.btTransform}
	@param useLinearFrameReferenceFrameB {Boolean}
*/
Ammo.btGeneric6DofSpringConstraint = function(rbB, frameInB, useLinearFrameReferenceFrameB) {};
/**
	@function
	@param index {Number}
	@param onOff {Boolean}
*/
Ammo.btGeneric6DofSpringConstraint.prototype.enableSpring = function(index, onOff) {};
/**
	@function
	@param index {Number}
	@param stiffness {Number}
*/
Ammo.btGeneric6DofSpringConstraint.prototype.setStiffness = function(index, stiffness) {};
/**
	@function
	@param index {Number}
	@param damping {Number}
*/
Ammo.btGeneric6DofSpringConstraint.prototype.setDamping = function(index, damping) {};
/**
	@constructor
	@implements Ammo.btGeneric6DofConstraint
	@param rbA {Ammo.btRigidBody}
	@param rbB {Ammo.btRigidBody}
	@param frameInA {Ammo.btTransform}
	@param frameInB {Ammo.btTransform}
	@param useLinearFrameReferenceFrameA {Boolean}
*/
Ammo.btGeneric6DofSpringConstraint = function(rbA, rbB, frameInA, frameInB, useLinearFrameReferenceFrameA) {};
/**
	@constructor
	@implements Ammo.btGeneric6DofConstraint
	@param rbB {Ammo.btRigidBody}
	@param frameInB {Ammo.btTransform}
	@param useLinearFrameReferenceFrameB {Boolean}
*/
Ammo.btGeneric6DofSpringConstraint = function(rbB, frameInB, useLinearFrameReferenceFrameB) {};
/**
	@function
	@param linearLower {Ammo.btVector3}
*/
Ammo.btGeneric6DofSpringConstraint.prototype.setLinearLowerLimit = function(linearLower) {};
/**
	@function
	@param linearUpper {Ammo.btVector3}
*/
Ammo.btGeneric6DofSpringConstraint.prototype.setLinearUpperLimit = function(linearUpper) {};
/**
	@function
	@param angularLower {Ammo.btVector3}
*/
Ammo.btGeneric6DofSpringConstraint.prototype.setAngularLowerLimit = function(angularLower) {};
/**
	@function
	@param angularUpper {Ammo.btVector3}
*/
Ammo.btGeneric6DofSpringConstraint.prototype.setAngularUpperLimit = function(angularUpper) {};
/**
	@function
	@param needsFeedback {Boolean}
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
	@param threshold {Number}
*/
Ammo.btGeneric6DofSpringConstraint.prototype.setBreakingImpulseThreshold = function(threshold) {};

/**
	@constructor
*/
Ammo.btSequentialImpulseConstraintSolver = function() {};

/**
	@constructor
	@implements Ammo.btTypedConstraint
	@param rbA {Ammo.btRigidBody}
	@param rbB {Ammo.btRigidBody}
	@param rbAFrame {Ammo.btTransform}
	@param rbBFrame {Ammo.btTransform}
*/
Ammo.btConeTwistConstraint = function(rbA, rbB, rbAFrame, rbBFrame) {};
/**
	@constructor
	@implements Ammo.btTypedConstraint
	@param rbA {Ammo.btRigidBody}
	@param rbAFrame {Ammo.btTransform}
*/
Ammo.btConeTwistConstraint = function(rbA, rbAFrame) {};
/**
	@function
	@param limitIndex {Number}
	@param limitValue {Number}
*/
Ammo.btConeTwistConstraint.prototype.setLimit = function(limitIndex, limitValue) {};
/**
	@function
	@param angularOnly {Boolean}
*/
Ammo.btConeTwistConstraint.prototype.setAngularOnly = function(angularOnly) {};
/**
	@function
	@param damping {Number}
*/
Ammo.btConeTwistConstraint.prototype.setDamping = function(damping) {};
/**
	@function
	@param b {Boolean}
*/
Ammo.btConeTwistConstraint.prototype.enableMotor = function(b) {};
/**
	@function
	@param maxMotorImpulse {Number}
*/
Ammo.btConeTwistConstraint.prototype.setMaxMotorImpulse = function(maxMotorImpulse) {};
/**
	@function
	@param maxMotorImpulse {Number}
*/
Ammo.btConeTwistConstraint.prototype.setMaxMotorImpulseNormalized = function(maxMotorImpulse) {};
/**
	@function
	@param q {Ammo.btQuaternion}
*/
Ammo.btConeTwistConstraint.prototype.setMotorTarget = function(q) {};
/**
	@function
	@param q {Ammo.btQuaternion}
*/
Ammo.btConeTwistConstraint.prototype.setMotorTargetInConstraintSpace = function(q) {};
/**
	@function
	@param needsFeedback {Boolean}
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
	@param threshold {Number}
*/
Ammo.btConeTwistConstraint.prototype.setBreakingImpulseThreshold = function(threshold) {};

/**
	@constructor
	@implements Ammo.btTypedConstraint
	@param rbA {Ammo.btRigidBody}
	@param rbB {Ammo.btRigidBody}
	@param pivotInA {Ammo.btVector3}
	@param pivotInB {Ammo.btVector3}
	@param axisInA {Ammo.btVector3}
	@param axisInB {Ammo.btVector3}
	@param [useReferenceFrameA] {Boolean}
*/
Ammo.btHingeConstraint = function(rbA, rbB, pivotInA, pivotInB, axisInA, axisInB, useReferenceFrameA) {};
/**
	@constructor
	@implements Ammo.btTypedConstraint
	@param rbA {Ammo.btRigidBody}
	@param rbB {Ammo.btRigidBody}
	@param rbAFrame {Ammo.btTransform}
	@param rbBFrame {Ammo.btTransform}
	@param [useReferenceFrameA] {Boolean}
*/
Ammo.btHingeConstraint = function(rbA, rbB, rbAFrame, rbBFrame, useReferenceFrameA) {};
/**
	@constructor
	@implements Ammo.btTypedConstraint
	@param rbA {Ammo.btRigidBody}
	@param rbAFrame {Ammo.btTransform}
	@param [useReferenceFrameA] {Boolean}
*/
Ammo.btHingeConstraint = function(rbA, rbAFrame, useReferenceFrameA) {};
/**
	@function
	@param low {Number}
	@param high {Number}
	@param softness {Number}
	@param biasFactor {Number}
	@param [relaxationFactor] {Number}
*/
Ammo.btHingeConstraint.prototype.setLimit = function(low, high, softness, biasFactor, relaxationFactor) {};
/**
	@function
	@param enableMotor {Boolean}
	@param targetVelocity {Number}
	@param maxMotorImpulse {Number}
*/
Ammo.btHingeConstraint.prototype.enableAngularMotor = function(enableMotor, targetVelocity, maxMotorImpulse) {};
/**
	@function
	@param angularOnly {Boolean}
*/
Ammo.btHingeConstraint.prototype.setAngularOnly = function(angularOnly) {};
/**
	@function
	@param enableMotor {Boolean}
*/
Ammo.btHingeConstraint.prototype.enableMotor = function(enableMotor) {};
/**
	@function
	@param maxMotorImpulse {Number}
*/
Ammo.btHingeConstraint.prototype.setMaxMotorImpulse = function(maxMotorImpulse) {};
/**
	@function
	@param targetAngle {Number}
	@param dt {Number}
*/
Ammo.btHingeConstraint.prototype.setMotorTarget = function(targetAngle, dt) {};
/**
	@function
	@param needsFeedback {Boolean}
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
	@param threshold {Number}
*/
Ammo.btHingeConstraint.prototype.setBreakingImpulseThreshold = function(threshold) {};

/**
	@constructor
	@implements Ammo.btTypedConstraint
	@param rbA {Ammo.btRigidBody}
	@param rbB {Ammo.btRigidBody}
	@param frameInA {Ammo.btTransform}
	@param frameInB {Ammo.btTransform}
	@param useLinearReferenceFrameA {Boolean}
*/
Ammo.btSliderConstraint = function(rbA, rbB, frameInA, frameInB, useLinearReferenceFrameA) {};
/**
	@constructor
	@implements Ammo.btTypedConstraint
	@param rbB {Ammo.btRigidBody}
	@param frameInB {Ammo.btTransform}
	@param useLinearReferenceFrameA {Boolean}
*/
Ammo.btSliderConstraint = function(rbB, frameInB, useLinearReferenceFrameA) {};
/**
	@function
	@param lowerLimit {Number}
*/
Ammo.btSliderConstraint.prototype.setLowerLinLimit = function(lowerLimit) {};
/**
	@function
	@param upperLimit {Number}
*/
Ammo.btSliderConstraint.prototype.setUpperLinLimit = function(upperLimit) {};
/**
	@function
	@param lowerAngLimit {Number}
*/
Ammo.btSliderConstraint.prototype.setLowerAngLimit = function(lowerAngLimit) {};
/**
	@function
	@param upperAngLimit {Number}
*/
Ammo.btSliderConstraint.prototype.setUpperAngLimit = function(upperAngLimit) {};
/**
	@function
	@param needsFeedback {Boolean}
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
	@param threshold {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Boolean}
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
	@param value {Boolean}
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
	@param value {Boolean}
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
	@param value {Boolean}
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
	@param value {Number}
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
	@param value {Boolean}
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
	@param value {Number}
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
	@param rayFromWorld {Ammo.btVector3}
	@param rayToWorld {Ammo.btVector3}
	@param resultCallback {Ammo.RayResultCallback}
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
	@param collisionObject {Ammo.btCollisionObject}
	@param [collisionFilterGroup] {Number}
	@param [collisionFilterMask] {Number}
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
	@param castShape {Ammo.btConvexShape}
	@param from {Ammo.btTransform}
	@param to {Ammo.btTransform}
	@param resultCallback {Ammo.ConvexResultCallback}
	@param allowedCcdPenetration {Number}
*/
Ammo.btCollisionWorld.prototype.convexSweepTest = function(castShape, from, to, resultCallback, allowedCcdPenetration) {};
/**
	@function
	@param colObjA {Ammo.btCollisionObject}
	@param colObjB {Ammo.btCollisionObject}
	@param resultCallback {Ammo.ContactResultCallback}
*/
Ammo.btCollisionWorld.prototype.contactPairTest = function(colObjA, colObjB, resultCallback) {};
/**
	@function
	@param colObj {Ammo.btCollisionObject}
	@param resultCallback {Ammo.ContactResultCallback}
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
	@param value {Boolean}
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
	@param value {Number}
*/
Ammo.btContactSolverInfo.prototype.set_m_splitImpulsePenetrationThreshold = function(value) {};

/**
	@function
	@param action {Ammo.btActionInterface}
*/
Ammo.btDynamicsWorld.prototype.addAction = function(action) {};
/**
	@function
	@param action {Ammo.btActionInterface}
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
	@param rayFromWorld {Ammo.btVector3}
	@param rayToWorld {Ammo.btVector3}
	@param resultCallback {Ammo.RayResultCallback}
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
	@param collisionObject {Ammo.btCollisionObject}
	@param [collisionFilterGroup] {Number}
	@param [collisionFilterMask] {Number}
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
	@param castShape {Ammo.btConvexShape}
	@param from {Ammo.btTransform}
	@param to {Ammo.btTransform}
	@param resultCallback {Ammo.ConvexResultCallback}
	@param allowedCcdPenetration {Number}
*/
Ammo.btDynamicsWorld.prototype.convexSweepTest = function(castShape, from, to, resultCallback, allowedCcdPenetration) {};
/**
	@function
	@param colObjA {Ammo.btCollisionObject}
	@param colObjB {Ammo.btCollisionObject}
	@param resultCallback {Ammo.ContactResultCallback}
*/
Ammo.btDynamicsWorld.prototype.contactPairTest = function(colObjA, colObjB, resultCallback) {};
/**
	@function
	@param colObj {Ammo.btCollisionObject}
	@param resultCallback {Ammo.ContactResultCallback}
*/
Ammo.btDynamicsWorld.prototype.contactTest = function(colObj, resultCallback) {};

/**
	@constructor
	@implements Ammo.btDynamicsWorld
	@param dispatcher {Ammo.btDispatcher}
	@param pairCache {Ammo.btBroadphaseInterface}
	@param constraintSolver {Ammo.btConstraintSolver}
	@param collisionConfiguration {Ammo.btCollisionConfiguration}
*/
Ammo.btDiscreteDynamicsWorld = function(dispatcher, pairCache, constraintSolver, collisionConfiguration) {};
/**
	@function
	@param gravity {Ammo.btVector3}
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
	@param body {Ammo.btRigidBody}
*/
Ammo.btDiscreteDynamicsWorld.prototype.addRigidBody = function(body) {};
/**
	@function
	@param body {Ammo.btRigidBody}
	@param group {Number}
	@param mask {Number}
*/
Ammo.btDiscreteDynamicsWorld.prototype.addRigidBody = function(body, group, mask) {};
/**
	@function
	@param body {Ammo.btRigidBody}
*/
Ammo.btDiscreteDynamicsWorld.prototype.removeRigidBody = function(body) {};
/**
	@function
	@param constraint {Ammo.btTypedConstraint}
	@param [disableCollisionsBetweenLinkedBodies] {Boolean}
*/
Ammo.btDiscreteDynamicsWorld.prototype.addConstraint = function(constraint, disableCollisionsBetweenLinkedBodies) {};
/**
	@function
	@param constraint {Ammo.btTypedConstraint}
*/
Ammo.btDiscreteDynamicsWorld.prototype.removeConstraint = function(constraint) {};
/**
	@function
	@param timeStep {Number}
	@param [maxSubSteps] {Number}
	@param [fixedTimeStep] {Number}
	@return {Number}
*/
Ammo.btDiscreteDynamicsWorld.prototype.stepSimulation = function(timeStep, maxSubSteps, fixedTimeStep) {
	return 0;
};
/**
	@function
	@param action {Ammo.btActionInterface}
*/
Ammo.btDiscreteDynamicsWorld.prototype.addAction = function(action) {};
/**
	@function
	@param action {Ammo.btActionInterface}
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
	@param rayFromWorld {Ammo.btVector3}
	@param rayToWorld {Ammo.btVector3}
	@param resultCallback {Ammo.RayResultCallback}
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
	@param collisionObject {Ammo.btCollisionObject}
	@param [collisionFilterGroup] {Number}
	@param [collisionFilterMask] {Number}
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
	@param castShape {Ammo.btConvexShape}
	@param from {Ammo.btTransform}
	@param to {Ammo.btTransform}
	@param resultCallback {Ammo.ConvexResultCallback}
	@param allowedCcdPenetration {Number}
*/
Ammo.btDiscreteDynamicsWorld.prototype.convexSweepTest = function(castShape, from, to, resultCallback, allowedCcdPenetration) {};
/**
	@function
	@param colObjA {Ammo.btCollisionObject}
	@param colObjB {Ammo.btCollisionObject}
	@param resultCallback {Ammo.ContactResultCallback}
*/
Ammo.btDiscreteDynamicsWorld.prototype.contactPairTest = function(colObjA, colObjB, resultCallback) {};
/**
	@function
	@param colObj {Ammo.btCollisionObject}
	@param resultCallback {Ammo.ContactResultCallback}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Number}
*/
Ammo.btVehicleRaycasterResult.prototype.set_m_distFraction = function(value) {};

/**
	@function
	@param from {Ammo.btVector3}
	@param to {Ammo.btVector3}
	@param result {Ammo.btVehicleRaycasterResult}
*/
Ammo.btVehicleRaycaster.prototype.castRay = function(from, to, result) {};

/**
	@constructor
	@implements Ammo.btVehicleRaycaster
	@param world {Ammo.btDynamicsWorld}
*/
Ammo.btDefaultVehicleRaycaster = function(world) {};
/**
	@function
	@param from {Ammo.btVector3}
	@param to {Ammo.btVector3}
	@param result {Ammo.btVehicleRaycasterResult}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Number}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Boolean}
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
	@param value {*}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Boolean}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Boolean}
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
	@param value {Ammo.RaycastInfo}
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
	@param value {Ammo.btVector3}
*/
Ammo.btWheelInfo.prototype.set_m_chassisConnectionPointCS = function(value) {};
/**
	@constructor
	@param ci {Ammo.btWheelInfoConstructionInfo}
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
	@param chassis {Ammo.btRigidBody}
	@param raycastInfo {Ammo.RaycastInfo}
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
	@param value {Ammo.btTransform}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
*/
Ammo.btWheelInfo.prototype.set_m_skidInfo = function(value) {};

/**
	@function
	@param collisionWorld {Ammo.btCollisionWorld}
	@param deltaTimeStep {Number}
*/
Ammo.btActionInterface.prototype.updateAction = function(collisionWorld, deltaTimeStep) {};

/**
	@constructor
	@implements Ammo.btActionInterface
	@param ghostObject {Ammo.btPairCachingGhostObject}
	@param convexShape {Ammo.btConvexShape}
	@param stepHeight {Number}
	@param [upAxis] {Number}
*/
Ammo.btKinematicCharacterController = function(ghostObject, convexShape, stepHeight, upAxis) {};
/**
	@function
	@param axis {Number}
*/
Ammo.btKinematicCharacterController.prototype.setUpAxis = function(axis) {};
/**
	@function
	@param walkDirection {Ammo.btVector3}
*/
Ammo.btKinematicCharacterController.prototype.setWalkDirection = function(walkDirection) {};
/**
	@function
	@param velocity {Ammo.btVector3}
	@param timeInterval {Number}
*/
Ammo.btKinematicCharacterController.prototype.setVelocityForTimeInterval = function(velocity, timeInterval) {};
/**
	@function
	@param origin {Ammo.btVector3}
*/
Ammo.btKinematicCharacterController.prototype.warp = function(origin) {};
/**
	@function
	@param collisionWorld {Ammo.btCollisionWorld}
*/
Ammo.btKinematicCharacterController.prototype.preStep = function(collisionWorld) {};
/**
	@function
	@param collisionWorld {Ammo.btCollisionWorld}
	@param dt {Number}
*/
Ammo.btKinematicCharacterController.prototype.playerStep = function(collisionWorld, dt) {};
/**
	@function
	@param fallSpeed {Number}
*/
Ammo.btKinematicCharacterController.prototype.setFallSpeed = function(fallSpeed) {};
/**
	@function
	@param jumpSpeed {Number}
*/
Ammo.btKinematicCharacterController.prototype.setJumpSpeed = function(jumpSpeed) {};
/**
	@function
	@param maxJumpHeight {Number}
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
	@param gravity {Number}
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
	@param slopeRadians {Number}
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
	@param useGhostObjectSweepTest {Boolean}
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
	@param collisionWorld {Ammo.btCollisionWorld}
	@param deltaTimeStep {Number}
*/
Ammo.btKinematicCharacterController.prototype.updateAction = function(collisionWorld, deltaTimeStep) {};

/**
	@constructor
	@implements Ammo.btActionInterface
	@param tuning {Ammo.btVehicleTuning}
	@param chassis {Ammo.btRigidBody}
	@param raycaster {Ammo.btVehicleRaycaster}
*/
Ammo.btRaycastVehicle = function(tuning, chassis, raycaster) {};
/**
	@function
	@param force {Number}
	@param wheel {Number}
*/
Ammo.btRaycastVehicle.prototype.applyEngineForce = function(force, wheel) {};
/**
	@function
	@param steering {Number}
	@param wheel {Number}
*/
Ammo.btRaycastVehicle.prototype.setSteeringValue = function(steering, wheel) {};
/**
	@function
	@param wheelIndex {Number}
	@return {Ammo.btTransform}
*/
Ammo.btRaycastVehicle.prototype.getWheelTransformWS = function(wheelIndex) {
	return null;
};
/**
	@function
	@param wheelIndex {Number}
	@param interpolatedTransform {Boolean}
*/
Ammo.btRaycastVehicle.prototype.updateWheelTransform = function(wheelIndex, interpolatedTransform) {};
/**
	@function
	@param connectionPointCS0 {Ammo.btVector3}
	@param wheelDirectionCS0 {Ammo.btVector3}
	@param wheelAxleCS {Ammo.btVector3}
	@param suspensionRestLength {Number}
	@param wheelRadius {Number}
	@param tuning {Ammo.btVehicleTuning}
	@param isFrontWheel {Boolean}
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
	@param index {Number}
	@return {Ammo.btWheelInfo}
*/
Ammo.btRaycastVehicle.prototype.getWheelInfo = function(index) {
	return null;
};
/**
	@function
	@param brake {Number}
	@param wheelIndex {Number}
*/
Ammo.btRaycastVehicle.prototype.setBrake = function(brake, wheelIndex) {};
/**
	@function
	@param rightIndex {Number}
	@param upIndex {Number}
	@param forwardIndex {Number}
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
	@param wheel {Ammo.btWheelInfo}
	@return {Number}
*/
Ammo.btRaycastVehicle.prototype.rayCast = function(wheel) {
	return 0;
};
/**
	@function
	@param step {Number}
*/
Ammo.btRaycastVehicle.prototype.updateVehicle = function(step) {};
/**
	@function
*/
Ammo.btRaycastVehicle.prototype.resetSuspension = function() {};
/**
	@function
	@param wheel {Number}
	@return {Number}
*/
Ammo.btRaycastVehicle.prototype.getSteeringValue = function(wheel) {
	return 0;
};
/**
	@function
	@param wheel {Ammo.btWheelInfo}
	@param [interpolatedTransform] {Boolean}
*/
Ammo.btRaycastVehicle.prototype.updateWheelTransformsWS = function(wheel, interpolatedTransform) {};
/**
	@function
	@param pitch {Number}
*/
Ammo.btRaycastVehicle.prototype.setPitchControl = function(pitch) {};
/**
	@function
	@param deltaTime {Number}
*/
Ammo.btRaycastVehicle.prototype.updateSuspension = function(deltaTime) {};
/**
	@function
	@param timeStep {Number}
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
	@param userConstraintType {Number}
*/
Ammo.btRaycastVehicle.prototype.setUserConstraintType = function(userConstraintType) {};
/**
	@function
	@param uid {Number}
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
	@param collisionWorld {Ammo.btCollisionWorld}
	@param deltaTimeStep {Number}
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
	@param index {Number}
	@return {Ammo.btCollisionObject}
*/
Ammo.btGhostObject.prototype.getOverlappingObject = function(index) {
	return null;
};
/**
	@function
	@param anisotropicFriction {Ammo.btVector3}
	@param frictionMode {Number}
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
	@param contactProcessingThreshold {Number}
*/
Ammo.btGhostObject.prototype.setContactProcessingThreshold = function(contactProcessingThreshold) {};
/**
	@function
	@param newState {Number}
*/
Ammo.btGhostObject.prototype.setActivationState = function(newState) {};
/**
	@function
	@param newState {Number}
*/
Ammo.btGhostObject.prototype.forceActivationState = function(newState) {};
/**
	@function
	@param [forceActivation] {Boolean}
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
	@param rest {Number}
*/
Ammo.btGhostObject.prototype.setRestitution = function(rest) {};
/**
	@function
	@param frict {Number}
*/
Ammo.btGhostObject.prototype.setFriction = function(frict) {};
/**
	@function
	@param frict {Number}
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
	@param flags {Number}
*/
Ammo.btGhostObject.prototype.setCollisionFlags = function(flags) {};
/**
	@function
	@param worldTrans {Ammo.btTransform}
*/
Ammo.btGhostObject.prototype.setWorldTransform = function(worldTrans) {};
/**
	@function
	@param collisionShape {Ammo.btCollisionShape}
*/
Ammo.btGhostObject.prototype.setCollisionShape = function(collisionShape) {};
/**
	@function
	@param ccdMotionThreshold {Number}
*/
Ammo.btGhostObject.prototype.setCcdMotionThreshold = function(ccdMotionThreshold) {};
/**
	@function
	@param radius {Number}
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
	@param index {Number}
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
	@param userPointer {*}
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
	@param index {Number}
	@return {Ammo.btCollisionObject}
*/
Ammo.btPairCachingGhostObject.prototype.getOverlappingObject = function(index) {
	return null;
};
/**
	@function
	@param anisotropicFriction {Ammo.btVector3}
	@param frictionMode {Number}
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
	@param contactProcessingThreshold {Number}
*/
Ammo.btPairCachingGhostObject.prototype.setContactProcessingThreshold = function(contactProcessingThreshold) {};
/**
	@function
	@param newState {Number}
*/
Ammo.btPairCachingGhostObject.prototype.setActivationState = function(newState) {};
/**
	@function
	@param newState {Number}
*/
Ammo.btPairCachingGhostObject.prototype.forceActivationState = function(newState) {};
/**
	@function
	@param [forceActivation] {Boolean}
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
	@param rest {Number}
*/
Ammo.btPairCachingGhostObject.prototype.setRestitution = function(rest) {};
/**
	@function
	@param frict {Number}
*/
Ammo.btPairCachingGhostObject.prototype.setFriction = function(frict) {};
/**
	@function
	@param frict {Number}
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
	@param flags {Number}
*/
Ammo.btPairCachingGhostObject.prototype.setCollisionFlags = function(flags) {};
/**
	@function
	@param worldTrans {Ammo.btTransform}
*/
Ammo.btPairCachingGhostObject.prototype.setWorldTransform = function(worldTrans) {};
/**
	@function
	@param collisionShape {Ammo.btCollisionShape}
*/
Ammo.btPairCachingGhostObject.prototype.setCollisionShape = function(collisionShape) {};
/**
	@function
	@param ccdMotionThreshold {Number}
*/
Ammo.btPairCachingGhostObject.prototype.setCcdMotionThreshold = function(ccdMotionThreshold) {};
/**
	@function
	@param radius {Number}
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
	@param index {Number}
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
	@param userPointer {*}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btBroadphaseInterface}
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
	@param value {Ammo.btDispatcher}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param value {Ammo.btVector3}
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
	@param n {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param n {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
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
	@param value {Number}
*/
Ammo.Config.prototype.set_collisions = function(value) {};

/**
	@constructor
	@implements Ammo.btCollisionObject
	@param worldInfo {Ammo.btSoftBodyWorldInfo}
	@param node_count {Number}
	@param x {Ammo.btVector3}
	@param m {Array<Number>}
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
	@param value {Ammo.Config}
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
	@param value {Ammo.tNodeArray}
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
	@param value {Ammo.tMaterialArray}
*/
Ammo.btSoftBody.prototype.set_m_materials = function(value) {};
/**
	@function
	@param node0 {Number}
	@param node1 {Number}
	@return {Boolean}
*/
Ammo.btSoftBody.prototype.checkLink = function(node0, node1) {
	return false;
};
/**
	@function
	@param node0 {Number}
	@param node1 {Number}
	@param node2 {Number}
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
	@param x {Ammo.btVector3}
	@param m {Number}
*/
Ammo.btSoftBody.prototype.appendNode = function(x, m) {};
/**
	@function
	@param node0 {Number}
	@param node1 {Number}
	@param mat {Ammo.Material}
	@param bcheckexist {Boolean}
*/
Ammo.btSoftBody.prototype.appendLink = function(node0, node1, mat, bcheckexist) {};
/**
	@function
	@param node0 {Number}
	@param node1 {Number}
	@param node2 {Number}
	@param mat {Ammo.Material}
*/
Ammo.btSoftBody.prototype.appendFace = function(node0, node1, node2, mat) {};
/**
	@function
	@param node0 {Number}
	@param node1 {Number}
	@param node2 {Number}
	@param node3 {Number}
	@param mat {Ammo.Material}
*/
Ammo.btSoftBody.prototype.appendTetra = function(node0, node1, node2, node3, mat) {};
/**
	@function
	@param node {Number}
	@param body {Ammo.btRigidBody}
	@param disableCollisionBetweenLinkedBodies {Boolean}
	@param influence {Number}
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
	@param mass {Number}
	@param fromfaces {Boolean}
*/
Ammo.btSoftBody.prototype.setTotalMass = function(mass, fromfaces) {};
/**
	@function
	@param node {Number}
	@param mass {Number}
*/
Ammo.btSoftBody.prototype.setMass = function(node, mass) {};
/**
	@function
	@param trs {Ammo.btTransform}
*/
Ammo.btSoftBody.prototype.transform = function(trs) {};
/**
	@function
	@param trs {Ammo.btVector3}
*/
Ammo.btSoftBody.prototype.translate = function(trs) {};
/**
	@function
	@param rot {Ammo.btQuaternion}
*/
Ammo.btSoftBody.prototype.rotate = function(rot) {};
/**
	@function
	@param scl {Ammo.btVector3}
*/
Ammo.btSoftBody.prototype.scale = function(scl) {};
/**
	@function
	@param k {Number}
	@param [maxiterations] {Number}
	@return {Number}
*/
Ammo.btSoftBody.prototype.generateClusters = function(k, maxiterations) {
	return 0;
};
/**
	@function
	@param colObj {Ammo.btCollisionObject}
	@return {Ammo.btSoftBody}
*/
Ammo.btSoftBody.prototype.upcast = function(colObj) {
	return null;
};
/**
	@function
	@param anisotropicFriction {Ammo.btVector3}
	@param frictionMode {Number}
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
	@param contactProcessingThreshold {Number}
*/
Ammo.btSoftBody.prototype.setContactProcessingThreshold = function(contactProcessingThreshold) {};
/**
	@function
	@param newState {Number}
*/
Ammo.btSoftBody.prototype.setActivationState = function(newState) {};
/**
	@function
	@param newState {Number}
*/
Ammo.btSoftBody.prototype.forceActivationState = function(newState) {};
/**
	@function
	@param [forceActivation] {Boolean}
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
	@param rest {Number}
*/
Ammo.btSoftBody.prototype.setRestitution = function(rest) {};
/**
	@function
	@param frict {Number}
*/
Ammo.btSoftBody.prototype.setFriction = function(frict) {};
/**
	@function
	@param frict {Number}
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
	@param flags {Number}
*/
Ammo.btSoftBody.prototype.setCollisionFlags = function(flags) {};
/**
	@function
	@param worldTrans {Ammo.btTransform}
*/
Ammo.btSoftBody.prototype.setWorldTransform = function(worldTrans) {};
/**
	@function
	@param collisionShape {Ammo.btCollisionShape}
*/
Ammo.btSoftBody.prototype.setCollisionShape = function(collisionShape) {};
/**
	@function
	@param ccdMotionThreshold {Number}
*/
Ammo.btSoftBody.prototype.setCcdMotionThreshold = function(ccdMotionThreshold) {};
/**
	@function
	@param radius {Number}
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
	@param index {Number}
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
	@param userPointer {*}
*/
Ammo.btSoftBody.prototype.setUserPointer = function(userPointer) {};

/**
	@constructor
	@implements Ammo.btDefaultCollisionConfiguration
	@param [info] {Ammo.btDefaultCollisionConstructionInfo}
*/
Ammo.btSoftBodyRigidBodyCollisionConfiguration = function(info) {};
/**
	@constructor
	@implements Ammo.btDefaultCollisionConfiguration
	@param [info] {Ammo.btDefaultCollisionConstructionInfo}
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
	@param n {Number}
	@return {Ammo.btSoftBody}
*/
Ammo.btSoftBodyArray.prototype.at = function(n) {
	return null;
};

/**
	@constructor
	@implements Ammo.btDiscreteDynamicsWorld
	@param dispatcher {Ammo.btDispatcher}
	@param pairCache {Ammo.btBroadphaseInterface}
	@param constraintSolver {Ammo.btConstraintSolver}
	@param collisionConfiguration {Ammo.btCollisionConfiguration}
	@param softBodySolver {Ammo.btSoftBodySolver}
*/
Ammo.btSoftRigidDynamicsWorld = function(dispatcher, pairCache, constraintSolver, collisionConfiguration, softBodySolver) {};
/**
	@function
	@param body {Ammo.btSoftBody}
	@param collisionFilterGroup {Number}
	@param collisionFilterMask {Number}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.addSoftBody = function(body, collisionFilterGroup, collisionFilterMask) {};
/**
	@function
	@param body {Ammo.btSoftBody}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.removeSoftBody = function(body) {};
/**
	@function
	@param collisionObject {Ammo.btCollisionObject}
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
	@param dispatcher {Ammo.btDispatcher}
	@param pairCache {Ammo.btBroadphaseInterface}
	@param constraintSolver {Ammo.btConstraintSolver}
	@param collisionConfiguration {Ammo.btCollisionConfiguration}
*/
Ammo.btSoftRigidDynamicsWorld = function(dispatcher, pairCache, constraintSolver, collisionConfiguration) {};
/**
	@function
	@param gravity {Ammo.btVector3}
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
	@param body {Ammo.btRigidBody}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.addRigidBody = function(body) {};
/**
	@function
	@param body {Ammo.btRigidBody}
	@param group {Number}
	@param mask {Number}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.addRigidBody = function(body, group, mask) {};
/**
	@function
	@param body {Ammo.btRigidBody}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.removeRigidBody = function(body) {};
/**
	@function
	@param constraint {Ammo.btTypedConstraint}
	@param [disableCollisionsBetweenLinkedBodies] {Boolean}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.addConstraint = function(constraint, disableCollisionsBetweenLinkedBodies) {};
/**
	@function
	@param constraint {Ammo.btTypedConstraint}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.removeConstraint = function(constraint) {};
/**
	@function
	@param timeStep {Number}
	@param [maxSubSteps] {Number}
	@param [fixedTimeStep] {Number}
	@return {Number}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.stepSimulation = function(timeStep, maxSubSteps, fixedTimeStep) {
	return 0;
};
/**
	@function
	@param action {Ammo.btActionInterface}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.addAction = function(action) {};
/**
	@function
	@param action {Ammo.btActionInterface}
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
	@param rayFromWorld {Ammo.btVector3}
	@param rayToWorld {Ammo.btVector3}
	@param resultCallback {Ammo.RayResultCallback}
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
	@param collisionObject {Ammo.btCollisionObject}
	@param [collisionFilterGroup] {Number}
	@param [collisionFilterMask] {Number}
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
	@param castShape {Ammo.btConvexShape}
	@param from {Ammo.btTransform}
	@param to {Ammo.btTransform}
	@param resultCallback {Ammo.ConvexResultCallback}
	@param allowedCcdPenetration {Number}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.convexSweepTest = function(castShape, from, to, resultCallback, allowedCcdPenetration) {};
/**
	@function
	@param colObjA {Ammo.btCollisionObject}
	@param colObjB {Ammo.btCollisionObject}
	@param resultCallback {Ammo.ContactResultCallback}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.contactPairTest = function(colObjA, colObjB, resultCallback) {};
/**
	@function
	@param colObj {Ammo.btCollisionObject}
	@param resultCallback {Ammo.ContactResultCallback}
*/
Ammo.btSoftRigidDynamicsWorld.prototype.contactTest = function(colObj, resultCallback) {};

/**
	@constructor
*/
Ammo.btSoftBodyHelpers = function() {};
/**
	@function
	@param worldInfo {Ammo.btSoftBodyWorldInfo}
	@param from {Ammo.btVector3}
	@param to {Ammo.btVector3}
	@param res {Number}
	@param fixeds {Number}
	@return {Ammo.btSoftBody}
*/
Ammo.btSoftBodyHelpers.prototype.CreateRope = function(worldInfo, from, to, res, fixeds) {
	return null;
};
/**
	@function
	@param worldInfo {Ammo.btSoftBodyWorldInfo}
	@param corner00 {Ammo.btVector3}
	@param corner10 {Ammo.btVector3}
	@param corner01 {Ammo.btVector3}
	@param corner11 {Ammo.btVector3}
	@param resx {Number}
	@param resy {Number}
	@param fixeds {Number}
	@param gendiags {Boolean}
	@return {Ammo.btSoftBody}
*/
Ammo.btSoftBodyHelpers.prototype.CreatePatch = function(worldInfo, corner00, corner10, corner01, corner11, resx, resy, fixeds, gendiags) {
	return null;
};
/**
	@function
	@param worldInfo {Ammo.btSoftBodyWorldInfo}
	@param corner00 {Ammo.btVector3}
	@param corner10 {Ammo.btVector3}
	@param corner01 {Ammo.btVector3}
	@param corner11 {Ammo.btVector3}
	@param resx {Number}
	@param resy {Number}
	@param fixeds {Number}
	@param gendiags {Boolean}
	@param tex_coords {Array<Number>}
	@return {Ammo.btSoftBody}
*/
Ammo.btSoftBodyHelpers.prototype.CreatePatchUV = function(worldInfo, corner00, corner10, corner01, corner11, resx, resy, fixeds, gendiags, tex_coords) {
	return null;
};
/**
	@function
	@param worldInfo {Ammo.btSoftBodyWorldInfo}
	@param center {Ammo.btVector3}
	@param radius {Ammo.btVector3}
	@param res {Number}
	@return {Ammo.btSoftBody}
*/
Ammo.btSoftBodyHelpers.prototype.CreateEllipsoid = function(worldInfo, center, radius, res) {
	return null;
};
/**
	@function
	@param worldInfo {Ammo.btSoftBodyWorldInfo}
	@param vertices {Array<Number>}
	@param triangles {Array<Number>}
	@param ntriangles {Number}
	@param randomizeConstraints {Boolean}
	@return {Ammo.btSoftBody}
*/
Ammo.btSoftBodyHelpers.prototype.CreateFromTriMesh = function(worldInfo, vertices, triangles, ntriangles, randomizeConstraints) {
	return null;
};
/**
	@function
	@param worldInfo {Ammo.btSoftBodyWorldInfo}
	@param vertices {Ammo.btVector3}
	@param nvertices {Number}
	@param randomizeConstraints {Boolean}
	@return {Ammo.btSoftBody}
*/
Ammo.btSoftBodyHelpers.prototype.CreateFromConvexHull = function(worldInfo, vertices, nvertices, randomizeConstraints) {
	return null;
};
